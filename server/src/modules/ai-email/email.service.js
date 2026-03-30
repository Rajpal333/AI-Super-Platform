const axios = require("axios");

const generateEmail = async (prompt) => {
  try {
    // ✅ Validation
    if (!prompt) {
      throw new Error("Prompt is required");
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        // ✅ Working free model
        model: "meta-llama/llama-3-8b-instruct",

messages: [
  {
    role: "user",
    content: `
Write a professional and realistic email based on the user's request.

User request: ${prompt}

Instructions:
- Do NOT use placeholders like [Your Name], [Company Name], etc.
- Do NOT leave any blanks
- If user details are missing, write a general email without personal info
- Do NOT generate fake personal details
- End with only "Sincerely"
- Keep it concise and natural
- Include a subject line
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

    // ✅ Safe response handling
    const result =
      response.data?.choices?.[0]?.message?.content || "No response";

    return result;

  } catch (error) {
    // 🔥 REAL ERROR PRINT (IMPORTANT)
    console.error(
      "AI ERROR:",
      error.response?.data || error.message
    );

    throw new Error(
      error.response?.data?.error?.message || "AI Service Failed"
    );
  }
};

module.exports = { generateEmail };