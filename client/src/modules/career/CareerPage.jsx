// import { useState } from "react";
// import { motion } from "framer-motion";
// import CareerForm from "./CareerForm";
// import { generateCareer } from "./careerService";

// const CareerPage = () => {
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async (data) => {
//     try {
//       setLoading(true);
//       setResult("");

//       const res = await generateCareer(data);
//       setResult(res.result);

//     } catch (error) {
//       console.log(error);
//       alert("Error generating roadmap");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-6">

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl"
//       >
//         {/* Title */}
//         <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//           🚀 AI Career Roadmap
//         </h1>

//         {/* Form */}
//         <CareerForm onSubmit={handleGenerate} loading={loading} />

//         {/* Result */}
//         {result && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-8 bg-black/50 p-6 rounded-xl border border-gray-700 whitespace-pre-wrap"
//           >
//             <h2 className="text-xl mb-3 text-green-400">✨ Roadmap</h2>
//             {result}
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default CareerPage;


import { useState } from "react";
import { motion } from "framer-motion";
import CareerForm from "./CareerForm";
import { generateCareer } from "./careerService";

const CareerPage = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (data) => {
    try {
      setLoading(true);
      setResult("");

      const res = await generateCareer(data);
      if (res.success) setResult(res.result);
      else alert(res.message || "Failed to generate roadmap");
    } catch (error) {
      console.error(error);
      alert("Error generating roadmap");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white flex items-center justify-center p-6 animate-gradientBG">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl bg-black/20 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
        >
          🚀 AI Career Roadmap
        </motion.h1>

        {/* Form */}
        <CareerForm onSubmit={handleGenerate} loading={loading} />

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 bg-black/30 p-8 rounded-2xl border border-white/20 shadow-2xl space-y-4"
          >
            <h2 className="text-3xl font-bold text-green-400 mb-4 animate-pulse">
              ✨ Roadmap
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg whitespace-pre-line">
              {result}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CareerPage;