// import { motion } from "framer-motion";

// const CodeEditor = ({ code, setCode, language, setLanguage, onSubmit, loading }) => {
//   return (
//     <motion.form
//       onSubmit={onSubmit}
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl"
//     >
//       <h2 className="text-2xl mb-4 text-center">💻 AI Code Reviewer</h2>

//       {/* Language */}
//       <select
//         name="language"
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//         className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 mb-4"
//       >
//         <option value="javascript">JavaScript</option>
//         <option value="python">Python</option>
//         <option value="java">Java</option>
//       </select>

//       {/* Code Input */}
//       <textarea
//         name="code"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         placeholder="Paste your code here..."
//         rows={10}
//         className="w-full p-4 rounded-lg bg-black/60 border border-gray-700 mb-4 font-mono text-sm"
//       />

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.9 }}
//         type="submit"
//         className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 rounded-full w-full"
//       >
//         {loading ? "Analyzing..." : "Analyze Code"}
//       </motion.button>
//     </motion.form>
//   );
// };

// export default CodeEditor;


import { motion } from "framer-motion";

const CodeEditor = ({ code, setCode, language, setLanguage, onSubmit, loading }) => {
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg p-6 rounded-3xl border border-gray-700 shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-white/90">
        💻 AI Code Reviewer
      </h2>

      {/* Language Selector */}
      <select
        name="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white mb-4 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>

      {/* Code Input */}
      <textarea
        name="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={12}
        className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-gray-100 font-mono text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
      />

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className={`mt-4 w-full py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
      >
        {loading ? "Analyzing..." : "Analyze Code"}
      </motion.button>
    </motion.form>
  );
};

export default CodeEditor;