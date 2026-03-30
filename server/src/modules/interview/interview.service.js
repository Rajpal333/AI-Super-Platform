const axios = require("axios");

const generateQuestions = async (data) => {
  try {
    const { role, type } = data;

    const prompt = `
Generate interview questions and answers for a ${role} role.

Type: ${type}

Instructions:
- Give 5-7 questions
- Provide clear answers
- Keep it simple and practical
- Add short tips if possible
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "meta-llama/llama-3-8b-instruct",
        messages: [
          {
            role: "user",
            content: prompt,
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
    console.error("Interview AI ERROR:", error.response?.data || error.message);
    throw new Error("Interview generation failed");
  }
};

module.exports = { generateQuestions };