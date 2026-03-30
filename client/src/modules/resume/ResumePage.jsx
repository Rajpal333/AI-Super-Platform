import { useState } from "react";
import { motion } from "framer-motion";
import ResumeUpload from "./ResumeUpload";
import { uploadResume } from "./resumeService";

const ResumePage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please upload a PDF");

    try {
      setLoading(true);
      setResult("");

      const data = await uploadResume(file);

      if (data.success) {
        setResult(data.result);
      }
    } catch (error) {
      console.log(error);
      alert("Error analyzing resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 flex flex-col items-center">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-10"
      >
        🚀 Resume Analyzer
      </motion.h1>

      {/* UPLOAD BOX */}
      <div className="w-full max-w-2xl">
        <ResumeUpload
          file={file}
          setFile={setFile}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>

      {/* LOADING */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-yellow-400 mt-4"
        >
          ⏳ AI is analyzing your resume...
        </motion.div>
      )}

      {/* RESULT */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 w-full max-w-3xl backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl text-green-400 font-semibold">
              ✨ Analysis Result
            </h2>

            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="bg-green-500 px-4 py-1 rounded-lg hover:bg-green-400 transition"
            >
              Copy
            </button>
          </div>

          <p className="text-gray-200 whitespace-pre-line leading-relaxed">
            {result}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ResumePage;