const axios = require("axios");

const generateCareerAdvice = async (data) => {
  try {
    const { skills, goal } = data;

    const prompt = `
User Skills: ${skills}
Career Goal: ${goal}

Create a detailed career roadmap.

Instructions:
- Step-by-step roadmap
- Skills to learn
- Projects to build
- Timeline (months)
- Tools/technologies
- Tips for success
- Keep it simple and practical
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
    console.error("Career AI ERROR:", error.response?.data || error.message);
    throw new Error("Career generation failed");
  }
};

module.exports = { generateCareerAdvice };