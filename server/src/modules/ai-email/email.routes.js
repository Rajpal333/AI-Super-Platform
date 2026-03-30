const express = require("express");
const { createEmail } = require("./email.controller");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

// Protected route
router.post("/", protect, createEmail);

module.exports = router;