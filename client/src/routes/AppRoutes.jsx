// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Profile from "../pages/Profile";

// import EmailPage from "../modules/ai-email/EmailPage";
// import ResumePage from "../modules/resume/ResumePage";
// import InterviewPage from "../modules/interview/InterviewPage";
// import CodeReviewPage from "../modules/code-review/CodeReviewPage";
// import CareerPage from "../modules/career/CareerPage";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/profile" element={<Profile />} />

//       {/* 🔥 AI Modules */}
//       <Route path="/email" element={<EmailPage />} />
//       <Route path="/resume" element={<ResumePage />} />
//       <Route path="/interview" element={<InterviewPage />} />
//       <Route path="/code-review" element={<CodeReviewPage />} />
//       <Route path="/career" element={<CareerPage />} />
//     </Routes>
//   );
// };

// export default AppRoutes;



// import React, { useContext } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Profile from "../pages/Profile";
// import { AuthContext } from "../context/AuthContext";

// const AppRoutes = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={!user ? <Login /> : <Navigate to="/profile" />} />
//       <Route path="/register" element={!user ? <Register /> : <Navigate to="/profile" />} />
//       <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
//     </Routes>
//   );
// };

// export default AppRoutes;


import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

// 🔥 IMPORT MODULE PAGES
import EmailPage from "../modules/ai-email/EmailPage";
import ResumePage from "../modules/resume/ResumePage";
import InterviewPage from "../modules/interview/InterviewPage";
import CodeReviewPage from "../modules/code-review/CodeReviewPage";
import CareerPage from "../modules/career/CareerPage";

import Dashboard from "../pages/Dashboard"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard/>}/>

      {/* 🔥 MODULE ROUTES */}
      <Route path="/ai-email" element={<EmailPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/code-review" element={<CodeReviewPage />} />
      <Route path="/career" element={<CareerPage />} />
    </Routes>
  );
};

export default AppRoutes;