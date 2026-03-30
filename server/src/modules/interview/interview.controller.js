const Activity = require("../../models/Activity");
const { generateQuestions } = require("./interview.service");

const createInterview = async (req, res) => {
  try {
    const { role, type } = req.body;

    // ✅ Validation
    if (!role || !type) {
      return res.status(400).json({
        success: false,
        message: "Role and type are required",
      });
    }

    // ✅ AI call
    const result = await generateQuestions({ role, type });

    // ✅ Activity FIX (schema ke hisaab se)
    await Activity.create({
      userId: req.user._id,
      type: "interview",
      description: result,
    });

    res.json({ success: true, result });

  } catch (error) {
    console.error("Interview Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { createInterview };