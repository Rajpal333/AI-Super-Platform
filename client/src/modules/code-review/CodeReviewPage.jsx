// import { useState } from "react";
// import { motion } from "framer-motion";
// import CodeEditor from "./CodeEditor";
// import { analyzeCode } from "./codeService";

// const CodeReviewPage = () => {
//   const [code, setCode] = useState("");
//   const [language, setLanguage] = useState("javascript");
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!code) return alert("Paste code first");

//     try {
//       setLoading(true);
//       setResult("");

//       const data = await analyzeCode(code, language);

//       if (data.success) {
//         setResult(data.result);
//       }
//     } catch (error) {
//       console.log("ERROR 👉", error);
//       alert("Error analyzing code");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 flex flex-col items-center">

//       {/* HEADER */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-5xl font-bold mb-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
//       >
//         💻 Code Review AI
//       </motion.h1>

//       {/* EDITOR */}
//       <div className="w-full max-w-2xl">
//         <CodeEditor
//           code={code}
//           setCode={setCode}
//           language={language}
//           setLanguage={setLanguage}
//           onSubmit={handleSubmit}
//           loading={loading}
//         />
//       </div>

//       {/* LOADING */}
//       {loading && <p className="mt-6 text-yellow-400">⏳ Analyzing...</p>}

//       {/* RESULT */}
//       {result && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="mt-10 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 max-w-4xl"
//         >
//           <h2 className="text-xl mb-3">✨ Result</h2>
//           <pre className="whitespace-pre-wrap text-gray-200">{result}</pre>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default CodeReviewPage;



import { useState } from "react";
import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import { analyzeCode } from "./codeService";

const CodeReviewPage = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code) return alert("Paste code first");

    try {
      setLoading(true);
      setResult("");

      const data = await analyzeCode(code, language);

      if (data.success) setResult(data.result);
    } catch (error) {
      console.log("ERROR 👉", error);
      alert("Error analyzing code");
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
        className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
      >
        💻 Code Review AI
      </motion.h1>

      {/* CODE EDITOR */}
      <div className="w-full max-w-3xl">
        <CodeEditor
          code={code}
          setCode={setCode}
          language={language}
          setLanguage={setLanguage}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>

      {/* LOADING */}
      {loading && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-yellow-400 text-lg font-medium"
        >
          ⏳ Analyzing...
        </motion.p>
      )}

      {/* RESULT */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 max-w-4xl w-full shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white/90">✨ Result</h2>
          <pre className="whitespace-pre-wrap text-gray-200 font-mono text-sm">{result}</pre>
        </motion.div>
      )}
    </div>
  );
};

export default CodeReviewPage;