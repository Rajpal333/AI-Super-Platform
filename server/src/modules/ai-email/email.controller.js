const Activity = require("../../models/Activity");
const { generateEmail } = require("./email.service");

const createEmail = async (req, res) => {
  try {
    const { prompt, name, degree } = req.body;

    // ✅ Validation
    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    if (!name || !degree) {
      return res.status(400).json({
        success: false,
        message: "Name and Degree are required",
      });
    }

    // 🔥 PRO LEVEL PROMPT (AI CONTROL)
    const fullPrompt = `
Write a professional internship/job email.

Candidate Name: ${name}
Education: ${degree}
Purpose: ${prompt}

Rules:
- Use the candidate name properly in email
- Mention degree naturally
- Use formal tone
- Add a proper subject line
- Do NOT use placeholders like [Your Name]
- Do NOT repeat closing lines
- End with only one closing (Best regards or Sincerely)
- Must include candidate name at the end

Generate a realistic and ready-to-send email.
`;

    // ✅ Generate Email
    const result = await generateEmail(fullPrompt);

    // ✅ Save Activity (clean & structured)
    await Activity.create({
      userId: req.user._id,
      type: "email",
      description: `Email Generated`,
    });

    // ✅ Response
    res.status(200).json({
      success: true,
      result,
    });

  } catch (error) {
    console.error("Email Controller Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = { createEmail };