import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";

const SRC_DIR = join(import.meta.dirname, "..", "src");

/** Real package names that collide with local filenames — never rewrite to relative. */
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
  { dir: join(SRC_DIR, "components", "ui"), exts: [".tsx"] },
  { dir: join(SRC_DIR, "components", "reui"), exts: [".tsx"] },
  { dir: join(SRC_DIR, "hooks"), exts: [".ts", ".tsx"] },
];

const allFiles = [];
for (const { dir, exts } of targetDirs) {
  let entries;
  try {
    entries = await walk(dir);
  } catch {
    continue;
  }
  for (const f of entries) {
    if (exts.some((ext) => f.endsWith(ext))) {
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

  if (!content.startsWith('"use client"') && !content.startsWith("'use client'")) {
    content = `"use client";\n\n${content}`;
  }

  content = content
    .replace(/from\s+"@\/lib\/utils"/g, 'from "@kumix/utils"')
    .replace(/from\s+"@\/hooks\/([^"]+)"/g, (_m, p1) => {
      return `from "${toRelImport(fileDir, join(SRC_DIR, "hooks", p1))}"`;
    })
    .replace(/from\s+"@\/components\/ui\/([^"]+)"/g, (_m, p1) => {
      return `from "${toRelImport(fileDir, join(SRC_DIR, "components", "ui", p1))}"`;
    })
    .replace(/from\s+"@\/components\/reui\/([^"]+)"/g, (_m, p1) => {
      return `from "${toRelImport(fileDir, join(SRC_DIR, "components", "reui", p1))}"`;
    })
    // Bare same-dir imports from a broken CLI run: "button" → "./button"
    .replace(/from\s+"([^"]+)"/g, (m, spec) => {
      if (spec.startsWith(".") || spec.startsWith("@") || spec.includes("/")) {
        return m;
      }
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
