# backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel
from agents import Agent, OpenAIChatCompletionsModel, RunConfig, Runner
from openai import AsyncOpenAI
import os

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Agent API is running!"}

# ✅ Gemini API key
gemini_api_key = "AIzaSyC7JtvQM1BJCl36Tix55p8e4r95Hc2CSOk"
# os.environ["OPENAI_API_KEY"] = gemini_api_key  # <- ensure globally accessible

# ✅ Gemini-compatible client
external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client
)

config = RunConfig(
    model=model,
    model_provider=external_client,
    tracing_disabled=True
)

# ✅ Agents
shopping_agent = Agent(
    name="Shopping Assistant",
    instructions="You assist users in finding products and making purchase decisions."
)
support_agent = Agent(
    name="Support Agent",
    instructions="You help users with post-purchase support and returns."
)

shopping_tool = shopping_agent.as_tool(
    tool_name="shopping_tool",
    tool_description="Helps users find and decide on products."
)
support_tool = support_agent.as_tool(
    tool_name="support_tool",
    tool_description="Assists users with post-purchase support and returns."
)

triage_agent = Agent(
    name="Triage Agent",
    instructions="You route user queries to the appropriate department.",
    tools=[shopping_tool, support_tool]
)

# ✅ Assign config to agent (so Runner picks it up automatically)

class Query(BaseModel):
    message: str

@app.post("/ask")
async def ask_agent(query: Query):
    try:
        print("👉 User message:", query.message)
        result = await Runner.run(triage_agent, query.message , run_config=config)
        print("✅ Agent result:", result.final_output)
        return {"response": result.final_output}
    except Exception as e:
        import traceback
        traceback.print_exc()
        return {"error": str(e)}
