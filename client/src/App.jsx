import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";
// import { AuthProvider } from "./context/AuthContext";
// // import "./assets/styles/global.css";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppRoutes />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;