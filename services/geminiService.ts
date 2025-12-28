
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVintageArticle = async (subjectName: string, age: number): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Escribe un artículo periodístico breve y emotivo al estilo de un diario de 1953 en español. 
      El tema es el nacimiento de una mujer llamada "${subjectName}" que hoy cumple ${age} años. 
      Habla sobre su importancia como matriarca y el mundo que la esperaba en Tucumán en los años 50. 
      Usa un lenguaje formal, poético y periodístico de la época.`,
    });
    return response.text || "La historia de una vida dedicada al amor y la familia...";
  } catch (error) {
    console.error("Error generating article:", error);
    return "En un caluroso enero de 1953, el destino marcó el inicio de una historia que hoy celebramos con orgullo...";
  }
};

export const analyzeMemory = async (imageData: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { data: imageData.split(',')[1], mimeType: 'image/jpeg' } },
          { text: "Describe esta foto familiar de forma poética y genera un pie de foto al estilo de un diario antiguo de 1953 en español." }
        ]
      },
    });
    return response.text || "Un recuerdo capturado para la posteridad.";
  } catch (error) {
    console.error("Error analyzing memory:", error);
    return "Un instante de felicidad que perdura en el tiempo.";
  }
};
