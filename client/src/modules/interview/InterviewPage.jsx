// import { useState } from "react";
// import { motion } from "framer-motion";
// import InterviewForm from "./InterviewForm";
// import { generateInterview } from "./interviewService";

// const InterviewPage = () => {
//   const [role, setRole] = useState("");
//   const [type, setType] = useState("technical");
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!role) return alert("Enter role");

//     try {
//       setLoading(true);
//       setQuestions([]);

//       const data = await generateInterview(role, type);

//       if (data.success) {
//         const list = data.result
//           .split("\n")
//           .filter((q) => q.trim() !== "");
//         setQuestions(list);
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Error generating questions");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 flex flex-col items-center">

//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-10"
//       >
//         🎤 Interview Prep
//       </motion.h1>

//       <div className="w-full max-w-xl">
//         <InterviewForm
//           role={role}
//           setRole={setRole}
//           type={type}
//           setType={setType}
//           onSubmit={handleSubmit}
//           loading={loading}
//         />
//       </div>

//       {loading && <p className="text-yellow-400">⏳ Generating...</p>}

//       <div className="grid md:grid-cols-2 gap-6 mt-10 w-full max-w-5xl">
//         {questions.map((q, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition"
//           >
//             <p className="text-gray-200">{q}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InterviewPage;

import { useState } from "react";
import { motion } from "framer-motion";
import InterviewForm from "./InterviewForm";
import { generateInterview } from "./interviewService";

const InterviewPage = () => {
  const [role, setRole] = useState("");
  const [type, setType] = useState("technical");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) return alert("Enter role");

    try {
      setLoading(true);
      setQuestions([]);

      const data = await generateInterview(role, type);

      if (data.success) {
        const list = data.result
          .split("\n")
          .filter((q) => q.trim() !== "");
        setQuestions(list);
      }
    } catch (error) {
      console.log(error);
      alert("Error generating questions");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white p-6 flex flex-col items-center">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-10"
      >
        🎤 Interview Prep
      </motion.h1>

      {/* FORM */}
      <div className="w-full max-w-xl">
        <InterviewForm
          role={role}
          setRole={setRole}
          type={type}
          setType={setType}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>

      {/* LOADING */}
      {loading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-yellow-400 text-lg font-medium mt-4"
        >
          ⏳ Generating...
        </motion.p>
      )}

      {/* QUESTIONS GRID */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 w-full max-w-5xl">
        {questions.map((q, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="bg-gray-800/70 backdrop-blur-lg p-5 rounded-2xl border border-gray-700 shadow-lg hover:scale-105 hover:bg-gray-800/90 transition-all cursor-pointer"
          >
            <p className="text-gray-200 font-medium">{q}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InterviewPage;