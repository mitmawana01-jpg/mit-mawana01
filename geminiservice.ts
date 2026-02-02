
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI Admissions Counselor for MIT Mawana (Mawana Institute of Technology).
Be helpful, polite, and encouraging. Answer in a mix of Hindi and English (Hinglish).
Director: Shri. Neeraj Kumar.
Contact: +91 8881888927.
`;

export const getGeminiResponse = async (message: string) => {
  try {
    // Strictly following SDK initialization guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Sorry, I am unable to answer right now.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    // Graceful fallback for the chatbot UI
    return "नमस्ते! मैं अभी ऑफलाइन हूँ। कृपया हमें +91 8881888927 पर कॉल करें।";
  }
};
