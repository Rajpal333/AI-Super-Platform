const express = require("express");
const authRoutes = require("../modules/auth/auth.routes");
const emailRoutes = require("../modules/ai-email/email.routes");
const resumeRoutes = require("../modules/resume/resume.routes");
const interviewRoutes = require("../modules/interview/interview.routes");
const codeReviewRoutes = require("../modules/code-review/codeReview.routes");
const careerRoutes = require("../modules/career/career.routes");
 
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/ai/email", emailRoutes);
router.use("/ai/resume", resumeRoutes);
router.use("/ai/interview", interviewRoutes);
router.use("/ai/code-review", codeReviewRoutes);
router.use("/ai/career", careerRoutes);

module.exports = router;