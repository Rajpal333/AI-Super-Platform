const Activity = require("../../models/Activity");
const { reviewCode } = require("./codeReview.service");

const createReview = async (req, res) => {
  try {
    const { code } = req.body;

    // ✅ Validation
    if (!code || code.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Code is required",
      });
    }

    // ✅ AI call
    const result = await reviewCode(code);

    // ✅ Activity FIX (schema ke hisaab se)
    await Activity.create({
      userId: req.user._id,
      type: "code",
      description: result,
    });

    res.json({ success: true, result });

  } catch (error) {
    console.error("Code Review Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { createReview };