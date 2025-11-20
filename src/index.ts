import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "example-mcp-server",
  version: "1.0.0",
});

server.registerTool(
  "say_hello",
  {
    description: "Say hello to a person",
    inputSchema: {
      name: z.string().describe("The name of the person"),
    },
  },
  async ({ name }) => {
    console.error(`>>> Saying hello to ${name}`);
    return {
      content: [
        {
          type: "text",
          text: `Hello, ${name}!`,
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Example MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
