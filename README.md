# Example MCP Server

A simple Model Context Protocol (MCP) server built with TypeScript and Node.js. This server demonstrates how to create an MCP server that exposes tools for use in Claude Desktop and other MCP clients.

## Features

- Simple `say_hello` tool that greets a person by name
- Built with TypeScript for type safety
- Uses the official MCP SDK for Node.js
- STDIO transport for communication with MCP clients

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

## Building

Build the TypeScript source code:

```bash
npm run build
```

This will compile the TypeScript files from `src/` to `build/` and make the output executable.

## Running the Inspector

After building, you can test your server using the MCP Inspector:

```bash
npm run inspector
```

Or run it directly:

```bash
npx @modelcontextprotocol/inspector@latest node build/index.js
```

The inspector provides a web-based interface where you can test your MCP tools interactively.

## Development

For development with auto-reload, use:

```bash
npm run dev
```

**Important**: When developing MCP servers that use STDIO transport, always use `console.error()` for logging, never `console.log()`. Writing to stdout will corrupt the JSON-RPC messages and break your server.

## Project Structure

```
example-mcp-server/
├── src/
│   └── index.ts          # Main server implementation
├── build/                # Compiled output (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## Additional Resources

- **[MCP Server Setup Gist](https://gist.github.com/jherr/8eedfc99cd3d80ba4bc23f48ced06c94)** - Additional information and walkthrough for setting up MCP STDIO servers, including project setup, configuration, and Claude Desktop integration
- **[Official MCP Documentation](https://modelcontextprotocol.io/docs/develop/build-server#node)** - The official documentation for building MCP servers (Note: this documentation may not be up to date)

## Claude Desktop Integration

To use this server with Claude Desktop, add it to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "example_server": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/THIS/PROJECT/build/index.js"]
    }
  }
}
```

**Note**: Use the absolute path to the built `index.js` file. After making changes, fully quit and restart Claude Desktop for the configuration to take effect.
