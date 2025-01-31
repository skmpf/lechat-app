import { mistral } from "@ai-sdk/mistral";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: mistral("mistral-large-latest"),
    messages,
  });

  return result.toDataStreamResponse();
}
