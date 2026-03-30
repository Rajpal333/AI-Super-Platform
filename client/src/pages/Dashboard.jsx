import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [aiMenuOpen, setAiMenuOpen] = useState(false);

  const tools = [
    { name: "AI Email", path: "/ai-email", icon: "📧", description: "Generate professional emails using AI." },
    { name: "Resume", path: "/resume", icon: "📄", description: "Create a resume quickly and easily." },
    { name: "Interview", path: "/interview", icon: "🎤", description: "Prepare for interviews with AI guidance." },
    { name: "Code Review", path: "/code-review", icon: "💻", description: "Get AI-assisted code review for your projects." },
    { name: "Career", path: "/career", icon: "🚀", description: "Explore career paths and guidance." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4 bg-black/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        {/* LOGO / HOME */}
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition"
          onClick={() => navigate("/")}
        >
          AI Platform Hub
        </h1>

        {/* MENU */}
        <div className="flex items-center gap-4 relative">
          {/* AI Tools Menu */}
          <div className="relative">
            <button
              onClick={() => setAiMenuOpen(!aiMenuOpen)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition"
            >
              AI Tools
            </button>
            {aiMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
              >
                {tools.map((tool) => (
                  <button
                    key={tool.name}
                    onClick={() => {
                      navigate(tool.path);
                      setAiMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-left hover:bg-gray-700 w-full"
                  >
                    {tool.name}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* PROFILE ICON */}
          <button
            onClick={() => navigate("/profile")}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-lg hover:scale-110 transition"
          >
            👤
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(tool.path)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl cursor-pointer shadow-lg flex flex-col justify-between hover:shadow-2xl transition"
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h2 className="text-xl font-bold mb-2">{tool.name}</h2>
            <p className="text-gray-100">{tool.description}</p>
            <button className="mt-4 bg-white/20 hover:bg-white/40 py-1 px-3 rounded-full text-sm font-medium transition">
              Learn More
            </button>
          </motion.div>
        ))}
      </main>

      {/* FOOTER */}
      <footer className="p-4 bg-black/80 backdrop-blur-md text-center text-gray-400">
        © 2026 AI Platform Hub. All rights reserved. | <span className="underline cursor-pointer">Contact</span>
      </footer>
    </div>
  );
};

export default Dashboard;