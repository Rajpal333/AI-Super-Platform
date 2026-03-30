const express = require("express");
const { createCareer } = require("./career.controller");
const protect = require("../../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createCareer);

module.exports = router;