import { useState } from "react";
import { motion } from "framer-motion";
import API from "../../utils/api";

const EmailPage = () => {
  const [prompt, setPrompt] = useState("");
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt || !name || !degree) {
      return alert("All fields are required");
    }

    try {
      setLoading(true);
      setResult("");

      const { data } = await API.post("/ai/email", {
        prompt,
        name,
        degree,
      });

      if (data.success) {
        setResult(data.result);
      }
    } catch (error) {
      console.error("Email Error:", error);
      alert("Error generating email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-blue-500 mb-8"
        >
          ✨ AI Email Generator
        </motion.h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl mb-6 space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
          />

          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Your Degree (e.g. B.Tech CSE)"
            className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
          />

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What kind of email do you want?"
            rows="4"
            className="w-full p-3 bg-black/40 border border-gray-700 rounded-lg focus:border-blue-500 outline-none"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-400 transition"
          >
            {loading ? "Generating..." : "Generate Email"}
          </motion.button>
        </motion.form>

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl whitespace-pre-line"
          >
            <h2 className="text-xl text-green-400 mb-4">✨ Result</h2>
            <p className="text-gray-200 leading-relaxed">{result}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EmailPage;
