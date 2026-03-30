const axios = require("axios");
const pdfParse = require("pdf-parse");

const analyzeResume = async (fileBuffer) => {
  try {
    const data = await pdfParse(fileBuffer);
    const text = data.text;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-3-8b-instruct",
        messages: [
          {
            role: "user",
            content: `
Analyze this resume and give professional feedback.

Resume:
${text}

Instructions:
- Give strengths
- Give weaknesses
- Give improvement suggestions
- Keep it clear and structured
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error("Resume AI ERROR:", error.response?.data || error.message);
    throw new Error("Resume Analysis Failed");
  }
};

module.exports = { analyzeResume };