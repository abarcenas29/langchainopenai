import { config as dotEnvConfig } from "dotenv";
import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";

dotEnvConfig();

const OPEN_AI_KEY = process.env.OPEN_AI_KEY;

const llm = new OpenAI({
  openAIApiKey: OPEN_AI_KEY,
});

const chatModal = new ChatOpenAI({
  openAIApiKey: OPEN_AI_KEY,
});

const text = "Who is the third president of the Philippines?";

llm.predict(text).then((result) => console.log(result));

chatModal.predict(text).then(console.log);
