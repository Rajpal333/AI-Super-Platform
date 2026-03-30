import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const success = await register(form);

    setLoading(false);
    if (success) {
      alert("✅ Registration successful! Please login.");
      navigate("/login"); // Redirect to login page instead of dashboard
    } else {
      alert("❌ Registration Failed. Check details and try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4">
      
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        className="bg-gray-900/80 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md border border-gray-700 shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gradient bg-clip-text text-transparent bg-blue-400/80">
          Register 🚀
        </h2>

        <motion.input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
          className="w-full p-4 mb-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
          className="w-full p-4 mb-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <motion.input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
          className="w-full p-4 mb-6 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className={`w-full py-3 rounded-xl text-white font-semibold ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400"
          } transition`}
        >
          {loading ? "Registering..." : "Register"}
        </motion.button>

        <p className="text-gray-400 text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-300 transition">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;