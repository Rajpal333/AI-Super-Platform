const axios = require("axios");

const reviewCode = async (code) => {
  try {
    const prompt = `
Analyze the following code:

${code}

Instructions:
- Find bugs or errors
- Suggest improvements
- Optimize the code
- Explain in simple terms
- Give corrected version if needed
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
    console.error("Code AI ERROR:", error.response?.data || error.message);
    throw new Error("Code Review Failed");
  }
};

module.exports = { reviewCode };