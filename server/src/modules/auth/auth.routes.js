const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  getProfile,
  getStats,
  getDashboard,
  getActivity,
} = require("./auth.controller");

const protect = require("../../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/profile", protect, getProfile);
router.get("/stats", protect, getStats);

// 🔥 NEW ROUTES
router.get("/dashboard", protect, getDashboard);
router.get("/activity", protect, getActivity);

module.exports = router;