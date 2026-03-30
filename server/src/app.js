const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// ✅ FIXED CORS
app.use(cors({
  origin: "http://localhost:5173", // 👈 frontend URL
  credentials: true               // 👈 allow cookies
}));

app.use(express.json());
app.use(cookieParser());

// routes
const routes = require("./routes");
app.use("/api", routes);

module.exports = app;