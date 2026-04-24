import { OpenAI } from "openai/client.js";
import dotenv from "dotenv";
dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const aiGenerate = async (req, res) => {
    const { itemName } = req.body;
    const prompt = `Generate a description for the item: ${itemName} that is 5 words long`;
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
    });
};

res.json({ description: response.choices[0].message.content });





