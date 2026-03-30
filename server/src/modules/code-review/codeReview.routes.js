const express = require("express");
const { createReview } = require("./codeReview.controller");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createReview);

module.exports = router;