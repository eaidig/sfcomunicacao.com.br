import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateDraftMessage = async (name: string, interest: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning fallback text.");
    return `Olá, meu nome é ${name}. Gostaria de solicitar um orçamento sobre ${interest}.`;
  }

  try {
    const prompt = `
      Você é um assistente de comunicação para clientes de uma agência de marketing chamada SF Comunicação.
      O cliente se chama "${name}" e está interessado em "${interest}".
      Escreva uma mensagem curta, profissional e direta (máximo de 3 frases) que esse cliente enviaria para a agência solicitando um orçamento ou reunião.
      Tom de voz: Profissional e focado em resultados.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "";
  } catch (error) {
    console.error("Error generating draft:", error);
    return `Olá, meu nome é ${name}. Tenho interesse em ${interest} e gostaria de saber mais.`;
  }
};