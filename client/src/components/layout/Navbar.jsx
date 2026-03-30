// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const { user } = useAuth();

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10 px-8 py-4 flex justify-between items-center"
//     >
//       <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//         AI Nexus
//       </h1>

//       <div className="flex gap-6 items-center">
//         <Link className="hover:text-purple-400" to="/">Home</Link>

//         {!user ? (
//           <>
//             <Link className="hover:text-cyan-400" to="/login">Login</Link>
//             <Link className="hover:text-cyan-400" to="/register">Register</Link>
//           </>
//         ) : (
//           <Link className="hover:text-green-400" to="/profile">Dashboard</Link>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;



import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur border-b border-gray-800 text-white">
      
      <h1 className="text-xl font-bold text-blue-400">
        AI Nexus 🚀
      </h1>

      <div className="flex items-center gap-6">
        <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>

        {user && (
          <>
            <Link to="/profile" className="flex items-center gap-2">
              <img
                src={`https://ui-avatars.com/api/?name=${user.name}`}
                className="w-8 h-8 rounded-full"
              />
              <span>{user.name}</span>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;



{/* <nav className="glass shadow-md px-6 py-3 flex justify-between items-center">

  <h1 className="text-xl font-bold text-primary">AI Nexus 🚀</h1>

  <div className="flex gap-4 items-center">
    <Link to="/">Home</Link>

    {user ? (
      <>
        <Link to="/profile">Dashboard</Link>
        <button onClick={logout} className="btn">Logout</button>
      </>
    ) : (
      <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>
    )}
  </div>
</nav> */}



// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useAuth } from "../../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 fixed w-full z-50"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-blue-500">
//           AI Nexus 🚀
//         </h1>

//         {/* Links */}
//         <div className="flex items-center gap-6">
//           <Link to="/" className="hover:text-blue-400 transition">
//             Home
//           </Link>

//           {!user ? (
//             <>
//               <Link to="/login" className="hover:text-blue-400">
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400 transition"
//               >
//                 Register
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/profile"
//                 className="hover:text-blue-400 transition"
//               >
//                 Dashboard
//               </Link>

//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-400 transition"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;