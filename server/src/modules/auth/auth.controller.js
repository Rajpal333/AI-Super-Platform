const User = require("../../models/User");
const Activity = require("../../models/Activity");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// ================= REGISTER =================
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword });

    res.status(201).json({
      success: true,
      message: "Registered successfully",
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= LOGIN =================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token, // 🔥 IMPORTANT (frontend ke liye)
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= LOGOUT =================
const logout = (req, res) => {
  res.json({ success: true });
};

// ================= PROFILE =================
const getProfile = (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

// ================= DASHBOARD =================
const getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= ACTIVITY =================
const getActivity = async (req, res) => {
  try {
    const activities = await Activity.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      success: true,
      activities,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= STATS =================
const getStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const activities = await Activity.find({ userId: userId });

    const stats = {
      total: activities.length,
      email: activities.filter(a => a.type === "email").length,
      resume: activities.filter(a => a.type === "resume").length,
      interview: activities.filter(a => a.type === "interview").length,
      code: activities.filter(a => a.type === "code").length,
      career: activities.filter(a => a.type === "career").length,
    };

    res.json({
      success: true,
      stats,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  getProfile,
  getStats,
  getDashboard,   // 🔥 NEW
  getActivity,    // 🔥 NEW
};