import { motion } from "framer-motion";

const ResumeUpload = ({ file, setFile, onSubmit, loading }) => {
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl mb-6 text-center"
    >
      {/* ICON */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-5xl mb-4"
      >
        📄
      </motion.div>

      {/* TEXT */}
      <h2 className="text-xl font-semibold mb-2">
        Upload Your Resume
      </h2>
      <p className="text-gray-300 mb-6">
        Get AI-powered feedback instantly 🚀
      </p>

      {/* INPUT */}
      <label className="block mb-4 cursor-pointer">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />

        <div className="border-2 border-dashed border-gray-500 p-6 rounded-xl hover:border-blue-400 transition">
          {file ? (
            <p className="text-green-400">{file.name}</p>
          ) : (
            <p className="text-gray-400">Click to upload PDF</p>
          )}
        </div>
      </label>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-2 rounded-full text-white font-semibold shadow-lg"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </motion.button>
    </motion.form>
  );
};

export default ResumeUpload;