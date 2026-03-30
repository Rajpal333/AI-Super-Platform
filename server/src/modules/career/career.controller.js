const Activity = require("../../models/Activity");
const { generateCareerAdvice } = require("./career.service");

const createCareer = async (req, res) => {
  try {
    const { skills, goal } = req.body;

    // ✅ Validation
    if (!skills || !goal) {
      return res.status(400).json({
        success: false,
        message: "Skills and goal are required",
      });
    }

    // ✅ AI call
    const result = await generateCareerAdvice({ skills, goal });

    // ✅ Activity FIX (schema ke hisaab se)
    await Activity.create({
      userId: req.user._id,
      type: "career",
      description: result,
    });

    res.json({ success: true, result });

  } catch (error) {
    console.error("Career Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { createCareer };