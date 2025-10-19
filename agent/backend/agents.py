from fastapi import FastAPI
from pydantic import BaseModel
from agents import Agent, OpenAIChatCompletionsModel, RunConfig, Runner, function_tool
from openai import AsyncOpenAI
import os
import traceback

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "✅ Cheeltech Agent API is running successfully!"}

# ✅ Gemini API key
gemini_api_key = "AIzaSyC7JtvQM1BJCl36Tix55p8e4r95Hc2CSOk"

# ✅ Gemini-compatible OpenAI client
external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

# ✅ Use a supported Gemini model
model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",  # More stable and compatible
    openai_client=external_client
)

config = RunConfig(
    model=model,
    model_provider=external_client,
    tracing_disabled=True
)


# ✅ Tool: Website Info
@function_tool
def get_cheeltech_info(
    tool_name="get_cheeltech_info",
    tool_description="Provides CheelTech website information like services, contact, and about sections.",
):
    """
    Returns company info, services, and contact details from the CheelTech website.
    """
    return """
    CheelTech is a technology company specializing in software solutions,
    web development, AI automation, and digital transformation.

    ⚙️ Services:
    - Website Development (Next.js, React, etc.)
    - AI Agent Automation
    - Custom Software Solutions
    - Mobile App Development
    - Cloud & DevOps Services
    - UI/UX Design
    - Technical Consulting

    📍 Location:
    CheelTech Technologies, Dubai, UAE.

    🌐 Website:
    https://www.cheeltech.com/

    📧 Contact:
    info@cheeltech.com
    """

# # ✅ Tool registration
# website_info_tool = {
#     "tool_name": "get_cheeltech_info",
#     "tool_description": "Provides CheelTech website information like services, contact, and about sections.",
#     "function": get_cheeltech_info
# }

# ✅ Agent definition
cheeltech_agent = Agent(
    name="CheelTech Chat Assistant",
    instructions=(
        "You are an official chatbot for CheelTech company. "
        "Answer every question strictly based on the website information provided by the tool. "
        "Never use your own knowledge or external data. "
        "If something is not mentioned on the CheelTech website, politely say: "
        "'I'm sorry, I couldn’t find that information on the CheelTech website.'"
    ),
    tools=[get_cheeltech_info]
)


# ✅ Request model
class Query(BaseModel):
    message: str

# ✅ POST endpoint for chatbot queries
@app.post("/ask")
async def ask_agent(query: Query):
    try:
        print(f"🟢 Incoming message: {query.message}")
        result = await Runner.run(cheeltech_agent, query.message, run_config=config)
        print(f"🟡 Agent output: {result.final_output}")
        return {"response": result.final_output}
    except Exception as e:
        traceback.print_exc()
        return {"error": str(e)}
