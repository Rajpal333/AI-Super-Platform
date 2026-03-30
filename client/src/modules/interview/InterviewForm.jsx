// import { motion } from "framer-motion";

// const InterviewForm = ({ role, setRole, type, setType, onSubmit, loading }) => {
//   return (
//     <motion.form
//       onSubmit={onSubmit}
//       initial={{ scale: 0.9, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       className="backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl text-center mb-8"
//     >
//       <h2 className="text-2xl font-semibold mb-4">
//         🎯 Interview Setup
//       </h2>

//       {/* ROLE INPUT */}
//       <input
//         type="text"
//         name="role"
//         id="role"
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//         placeholder="Frontend Developer"
//         className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 mb-4 outline-none focus:border-blue-400"
//       />

//       {/* TYPE SELECT */}
//       <select
//         name="type"
//         value={type}
//         onChange={(e) => setType(e.target.value)}
//         className="w-full p-3 rounded-lg bg-black/40 border border-gray-700 mb-4"
//       >
//         <option value="technical">Technical</option>
//         <option value="hr">HR</option>
//         <option value="mixed">Mixed</option>
//       </select>

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         type="submit"
//         disabled={loading}
//         className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-2 rounded-full"
//       >
//         {loading ? "Generating..." : "Generate Questions"}
//       </motion.button>
//     </motion.form>
//   );
// };

// export default InterviewForm;

import { motion } from "framer-motion";

const InterviewForm = ({ role, setRole, type, setType, onSubmit, loading }) => {
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-lg bg-gray-900/70 p-8 rounded-3xl border border-gray-700 shadow-2xl text-center mb-8"
    >
      <h2 className="text-2xl font-semibold mb-6 text-white/90">
        🎯 Interview Setup
      </h2>

      {/* ROLE INPUT */}
      <input
        type="text"
        name="role"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Frontend Developer"
        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-white mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />

      {/* TYPE SELECT */}
      <select
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      >
        <option value="technical">Technical</option>
        <option value="hr">HR</option>
        <option value="mixed">Mixed</option>
      </select>

      {/* SUBMIT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={loading}
        className="mt-3 w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
      >
        {loading ? "Generating..." : "Generate Questions"}
      </motion.button>
    </motion.form>
  );
};

export default InterviewForm;