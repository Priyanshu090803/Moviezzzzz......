import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

// Initialize with your API key
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const geminiAi = async (prompt) => {
  try {
    // Use the current model configuration
    const model = await genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // Updated model name
    });
    
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Gemini error", err);
    throw new Error("Failed to Generate, please try again!");
  }
};