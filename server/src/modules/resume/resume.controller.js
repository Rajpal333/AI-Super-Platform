const { analyzeResume } = require("./resume.service");
const Activity = require("../../models/Activity");

const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const result = await analyzeResume(req.file.buffer);

    // 🔥 Save Activity
await Activity.create({
  userId: req.user._id,
  type: "resume",
  description: result,
});

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { uploadResume };