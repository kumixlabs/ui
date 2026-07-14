import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SRC_DIR = join(import.meta.dirname, "..", "src");

const files = [
  ...(await readdir(join(SRC_DIR, "ui"))).filter((f) => f.endsWith(".tsx")),
  ...(await readdir(join(SRC_DIR, "hooks"))).filter((f) => f.endsWith(".ts")),
].map((f) => ({ f, dir: f.endsWith(".tsx") ? "ui" : "hooks" }));

let changed = 0;
for (const { f, dir } of files) {
  const path = join(SRC_DIR, dir, f);
  let content = await readFile(path, "utf8");
  const original = content;

  if (!content.startsWith('"use client"')) {
    content = `"use client";\n\n${content}`;
  }

  content = content
    .replace(/from\s+"@\/lib\/utils"/g, 'from "@kumix/utils"')
    .replace(/from\s+"@\/ui\/([^"]+)"/g, 'from "./$1"')
    .replace(/from\s+"@\/hooks\/([^"]+)"/g, 'from "../hooks/$1"');

  if (content !== original) {
    await writeFile(path, content, "utf8");
    console.log(`✓ ${f}`);
    changed++;
  }
}

console.log(`\n${changed}/${files.length} files processed.`);
