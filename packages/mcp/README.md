# Kumix UI - MCP Server

MCP server for exploring the Kumix UI package, source code, and documentation.

## Available Packages

The server scans `packages/**` at runtime and indexes every workspace package whose name starts with `@kumix/` except `@kumix/mcp`.

- `@kumix/ui` - React component package

## Setup

```bash
cd packages/mcp
bun run build
bun run smoke
```

## MCP Client Configuration

```json
{
  "mcpServers": {
    "Kumix UI": {
      "command": "node",
      "args": ["/absolute/path/to/ui/packages/mcp/dist/index.js"],
      "cwd": "/absolute/path/to/ui"
    }
  }
}
```

## Tools

- `list_packages` - Lists indexed Kumix packages.
- `get_package_info` - Shows package metadata and exports.
- `find_component` - Searches source files by component/file name.
- `read_component_code` - Reads source files relative to `src/`.
- `get_usage_example` - Returns package README content or a generated example.
