import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { jobRole, skills, experienceLevel } = req.body;

  if (!jobRole || !skills) {
    return res.status(400).json({ error: "Job role and skills are required" });
  }

  try {
    const prompt = `Create a professional resume summary for a ${jobRole} with skills in ${skills}. Experience level: ${experienceLevel}. Return only 2-3 sentences.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const summary = response.text || "";
    return res.status(200).json({ summary: summary.trim() });
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    return res.status(500).json({ error: "Failed to generate summary with AI" });
  }
}
