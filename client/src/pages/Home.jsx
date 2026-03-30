import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "📧",
    title: "AI Email Generator",
    description:
      "Generate professional emails instantly using AI. Just provide your context, and it crafts polished emails for work or personal use.",
    review:
      "Easy to use, saves time, customizable templates. Perfect for students, professionals, and job seekers.",
  },
  {
    icon: "📄",
    title: "Resume Analyzer",
    description:
      "Analyze your resume to optimize it for ATS (Applicant Tracking Systems) and improve your chances of landing interviews.",
    review:
      "Highlights skills, detects errors, and gives actionable suggestions. Great for freshers and experienced candidates.",
  },
  {
    icon: "💻",
    title: "Code Reviewer",
    description:
      "Review your code for errors, best practices, and optimization tips using AI. Supports multiple programming languages.",
    review:
      "Detailed feedback, suggestions for improvement, and code readability checks. Ideal for developers and students.",
  },
  {
    icon: "🎯",
    title: "Interview Prep",
    description:
      "Prepare for interviews with AI-generated questions, mock interviews, and answers tailored to your role.",
    review:
      "Boosts confidence, covers technical and HR questions, and provides instant feedback. Must-have for job seekers.",
  },
  {
    icon: "🚀",
    title: "Career Roadmap",
    description:
      "Get a personalized career roadmap with AI suggestions based on your skills, interests, and industry trends.",
    review:
      "Clear guidance, step-by-step plan, and skill recommendations. Helps plan long-term career growth.",
  },
];

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col">
      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-8 py-5 bg-gray-900/80 backdrop-blur-lg fixed top-0 z-50 shadow-md">
        <motion.h1
          className="text-2xl font-bold text-blue-400"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          AI Nexus
        </motion.h1>
        <div className="flex gap-6">
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 rounded-xl hover:bg-blue-400 transition font-medium"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 border border-gray-700 rounded-xl hover:bg-gray-800 transition font-medium"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6 md:px-12">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Welcome to AI Nexus 🚀
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 mt-6 text-lg md:text-xl max-w-3xl"
        >
          Explore powerful AI tools for emails, resumes, code reviews, interview prep, and career planning. Click any tool to know more!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col md:flex-row gap-4"
        >
          <Link
            to="/login"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Get Started
          </Link>
          <Link
            to="/register"
            className="px-8 py-3 rounded-full border border-gray-700 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Create Account
          </Link>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mt-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">🔥 AI Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/70 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 shadow-lg flex flex-col items-center text-center cursor-pointer hover:bg-gray-800/90 transition-all"
              onClick={() => setSelectedFeature(feature)}
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE MODAL */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 rounded-3xl p-8 max-w-lg w-full shadow-xl relative"
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              >
                &times;
              </button>
              <div className="text-center">
                <span className="text-5xl mb-4 block">{selectedFeature.icon}</span>
                <h3 className="text-2xl font-bold mb-4">{selectedFeature.title}</h3>
                <p className="text-gray-300 mb-4">{selectedFeature.description}</p>
                <p className="text-gray-400 italic">Review: {selectedFeature.review}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="mt-20 py-10 bg-gray-900/80 backdrop-blur-lg border-t border-gray-700 text-center text-gray-400">
        <h4 className="text-xl font-semibold mb-4">About AI Nexus Tools</h4>
        <p className="max-w-2xl mx-auto text-gray-400 mb-2">
          AI Email Generator, Resume Analyzer, Code Reviewer, Interview Prep, Career Roadmap – all in one platform designed to boost your productivity and career growth.
        </p>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} AI Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;