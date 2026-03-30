const express = require("express");
const { createInterview } = require("./interview.controller");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createInterview);

module.exports = router;