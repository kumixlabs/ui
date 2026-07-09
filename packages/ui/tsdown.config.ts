import { defineConfig } from "tsdown";

import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  clean: false,
  dts: true,
  publint: true,
  deps: {
    neverBundle: [...Object.keys(pkg.peerDependencies || {})],
  },
  entry: ["./src/index.ts", "./src/hooks.ts"],
  format: "esm",
  target: "ES2022",
  outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
  attw: { profile: "esm-only" },
});
