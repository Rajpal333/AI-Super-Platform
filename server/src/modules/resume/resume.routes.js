 const express = require("express");
const { uploadResume } = require("./resume.controller");
const protect = require("../../middleware/authMiddleware");
const upload = require("../../utils/upload");

const router = express.Router();

router.post("/", protect, upload.single("resume"), uploadResume);

module.exports = router;