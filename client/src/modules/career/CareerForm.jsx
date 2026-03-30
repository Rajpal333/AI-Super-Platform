// import { useState } from "react";
// import { motion } from "framer-motion";

// const CareerForm = ({ onSubmit, loading }) => {
//   const [skills, setSkills] = useState("");
//   const [goal, setGoal] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ skills, goal });
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="space-y-5"
//     >
//       {/* Skills */}
//       <input
//         type="text"
//         placeholder="💡 Skills (HTML, CSS, JS...)"
//         value={skills}
//         onChange={(e) => setSkills(e.target.value)}
//         className="w-full p-3 rounded-lg bg-black/50 border border-gray-600 focus:border-green-400 outline-none transition"
//         required
//       />

//       {/* Goal */}
//       <input
//         type="text"
//         placeholder="🎯 Goal (Frontend Developer...)"
//         value={goal}
//         onChange={(e) => setGoal(e.target.value)}
//         className="w-full p-3 rounded-lg bg-black/50 border border-gray-600 focus:border-blue-400 outline-none transition"
//         required
//       />

//       {/* Button */}
//       <button
//         type="submit"
//         className="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition duration-300 font-semibold"
//       >
//         {loading ? "Generating..." : "🚀 Generate Roadmap"}
//       </button>
//     </motion.form>
//   );
// };

// export default CareerForm;



import { useState } from "react";
import { motion } from "framer-motion";

const CareerForm = ({ onSubmit, loading }) => {
  const [skills, setSkills] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ skills, goal });
  };

  const isFilled = (value) => value && value.length > 0;

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Skills Input */}
      <div className="relative w-full">
        <input
          type="text"
          id="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full px-4 pt-5 pb-2 text-white bg-black/30 border-2 border-green-500 rounded-lg outline-none focus:border-green-400 transition-colors duration-300"
          required
        />
        <motion.label
          htmlFor="skills"
          animate={{
            top: isFilled(skills) ? -8 : 14,
            fontSize: isFilled(skills) ? "0.75rem" : "1rem",
            color: isFilled(skills) ? "#34D399" : "#9CA3AF",
            backgroundColor: isFilled(skills) ? "transparent" : "rgba(0,0,0,0.3)",
            padding: isFilled(skills) ? "0" : "0 4px",
          }}
          className="absolute left-4 rounded pointer-events-none transition-all duration-300"
        >
          💡 Skills (HTML, CSS, JS...)
        </motion.label>
      </div>

      {/* Goal Input */}
      <div className="relative w-full">
        <input
          type="text"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full px-4 pt-5 pb-2 text-white bg-black/30 border-2 border-blue-500 rounded-lg outline-none focus:border-blue-400 transition-colors duration-300"
          required
        />
        <motion.label
          htmlFor="goal"
          animate={{
            top: isFilled(goal) ? -8 : 14,
            fontSize: isFilled(goal) ? "0.75rem" : "1rem",
            color: isFilled(goal) ? "#3B82F6" : "#9CA3AF",
            backgroundColor: isFilled(goal) ? "transparent" : "rgba(0,0,0,0.3)",
            padding: isFilled(goal) ? "0" : "0 4px",
          }}
          className="absolute left-4 rounded pointer-events-none transition-all duration-300"
        >
          🎯 Goal (Backend Developer...)
        </motion.label>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03, boxShadow: "0 0 10px rgba(0,255,255,0.4)" }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold shadow-md transition-all duration-300"
      >
        {loading ? "Generating..." : "🚀 Generate Roadmap"}
      </motion.button>
    </motion.form>
  );
};

export default CareerForm;