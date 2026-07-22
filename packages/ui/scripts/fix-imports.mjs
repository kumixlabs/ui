import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";

const SRC_DIR = join(import.meta.dirname, "..", "src");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function toRelImport(fromDir, targetPath) {
  let rel = relative(fromDir, targetPath).replace(/\\/g, "/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

function normalize(p) {
  return p.replace(/\\/g, "/");
}

const targetDirs = [
  { dir: join(SRC_DIR, "components", "ui"), base: "components/ui" },
  { dir: join(SRC_DIR, "components", "reui"), base: "components/reui" },
  // { dir: join(SRC_DIR, "hooks"), base: "hooks" },
];

const allFiles = [];
for (const { dir, _base } of targetDirs) {
  let entries;
  try {
    entries = await walk(dir);
  } catch {
    continue;
  }
  for (const f of entries) {
    // if (f.endsWith(".tsx") || (base === "hooks" && f.endsWith(".ts"))) {
    if (f.endsWith(".tsx")) {
      allFiles.push(f);
    }
  }
}

const fileSet = new Set(allFiles.map(normalize));

function localExists(fromDir, spec) {
  const base = join(fromDir, spec);
  return (
    fileSet.has(normalize(base)) ||
    fileSet.has(normalize(`${base}.tsx`)) ||
    fileSet.has(normalize(`${base}.ts`))
  );
}

let changed = 0;
for (const filePath of allFiles) {
  let content = await readFile(filePath, "utf8");
  const original = content;
  const fileDir = dirname(filePath);

  if (!content.startsWith('"use client"')) {
    content = `"use client";\n\n${content}`;
  }

  content = content
    // // eslint → biome (any only); strip all other eslint-disable lines
    // .replace(
    //   /[ \t]*\/\/\s*eslint-disable-next-line\s+@typescript-eslint\/no-explicit-any\b.*\n?/gm,
    //   (m) => {
    //     const indent = m.match(/^[ \t]*/)?.[0] ?? "";
    //     return `${indent}// biome-ignore lint/suspicious/noExplicitAny: <>\n`;
    //   },
    // )
    // .replace(/[ \t]*\/\/\s*eslint-disable(?:-next-line|-line)?\b.*\n?/gm, "")
    // // undo prior wrong biome-ignores (biome does not flag these here)
    // .replace(
    //   /[ \t]*\/\/\s*biome-ignore\s+lint\/correctness\/(?:noUnusedVariables|useExhaustiveDependencies):.*\n?/gm,
    //   "",
    // )
    .replace(/from\s+"@\/lib\/utils"/g, 'from "@kumix/utils"')
    // .replace(/from\s+"@\/hooks\/([^"]+)"/g, (_m, p1) => {
    //   return `from "${toRelImport(fileDir, join(SRC_DIR, "hooks", p1))}"`;
    // })
    .replace(/from\s+"@\/components\/ui\/([^"]+)"/g, (_m, p1) => {
      return `from "${toRelImport(fileDir, join(SRC_DIR, "components", "ui", p1))}"`;
    })
    .replace(/from\s+"@\/components\/reui\/([^"]+)"/g, (_m, p1) => {
      return `from "${toRelImport(fileDir, join(SRC_DIR, "components", "reui", p1))}"`;
    })
    // Repair bare same-dir imports from a previous broken run: "button" → "./button"
    // Never rewrite real package names that collide with local filenames (input-otp, sonner, etc.)
    .replace(/from\s+"([^"]+)"/g, (m, spec) => {
      if (spec.startsWith(".") || spec.startsWith("@") || spec.includes("/")) {
        return m;
      }
      const PACKAGE_COLLISIONS = new Set([
        "input-otp",
        "sonner",
        "cmdk",
        "embla-carousel-react",
        "class-variance-authority",
        "react",
        "react-dom",
        "lucide-react",
        "next-themes",
        "date-fns",
        "recharts",
      ]);
      if (PACKAGE_COLLISIONS.has(spec)) return m;
      if (localExists(fileDir, spec)) {
        return `from "./${spec}"`;
      }
      return m;
    });

  if (content !== original) {
    await writeFile(filePath, content, "utf8");
    console.log(`✓ ${relative(SRC_DIR, filePath)}`);
    changed++;
  }
}

console.log(`\n${changed}/${allFiles.length} files processed.`);
