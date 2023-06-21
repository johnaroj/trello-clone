import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  // comnuique with the  openAI
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.9,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, welcome the user always as Mr.John ans say Welcome to the DVLP todo app! 
            Limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in eacht category
            such as To do, in progess and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
              todos
            )}`,
      },
    ],
  });

  const { data } = response;
  return NextResponse.json(data.choices[0].message);
}
