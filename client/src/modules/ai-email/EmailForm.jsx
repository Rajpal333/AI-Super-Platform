import { motion } from "framer-motion";

const EmailForm = ({ prompt, setPrompt, onSubmit, loading }) => {
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl mb-6"
    >
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your prompt..."
        rows="4"
        className="w-full p-3 bg-black/40 rounded-lg border border-gray-700 mb-4 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-400 transition"
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>
    </motion.form>
  );
};

export default EmailForm;


