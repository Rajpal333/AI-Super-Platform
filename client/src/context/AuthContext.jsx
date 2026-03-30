// import { createContext, useContext, useState, useEffect } from "react";
// import API from "../utils/api";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🔥 Load user on refresh
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const { data } = await API.get("/auth/profile");
//         setUser(data.user);
//       } catch (error) {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   // 🔥 Login
//   const login = async (formData) => {
//     const { data } = await API.post("/auth/login", formData);
//     localStorage.setItem("token", data.token);
//     setUser(data.user);
//   };

//   // 🔥 Register
//   const register = async (formData) => {
//     await API.post("/auth/register", formData);
//   };

//   // 🔥 Logout
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// import { createContext, useContext, useState } from "react";
// import API from "../utils/api";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // ✅ LOGIN
//   const login = async (formData) => {
//     try {
//       const { data } = await API.post("/auth/login", formData);

//       if (data.success) {
//         setUser(data.user);
//         return true; // 🔥 IMPORTANT
//       }
//       return false;
//     } catch (error) {
//       console.log("Login Error:", error);
//       return false;
//     }
//   };

//   // ✅ REGISTER
//   const register = async (formData) => {
//     try {
//       const { data } = await API.post("/auth/register", formData);

//       if (data.success) {
//         setUser(data.user);
//         return true; // 🔥 IMPORTANT
//       }
//       return false;
//     } catch (error) {
//       console.log("Register Error:", error);
//       return false;
//     }
//   };

//   // ✅ LOGOUT
//   const logout = async () => {
//     try {
//       await API.get("/auth/logout");
//       setUser(null);
//     } catch (error) {
//       console.log("Logout Error:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);







import { createContext, useContext, useState } from "react";
import API from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ LOGIN
  const login = async (formData) => {
    try {
      const { data } = await API.post("/auth/login", formData);

      if (data.success) {
        // 🔥 TOKEN SAVE (MOST IMPORTANT FIX)
        localStorage.setItem("token", data.token);

        setUser(data.user);
        return true;
      }
      return false;
    } catch (error) {
      console.log("Login Error:", error);
      return false;
    }
  };

  // ✅ REGISTER
  const register = async (formData) => {
    try {
      const { data } = await API.post("/auth/register", formData);

      if (data.success) {
        return true;
      }
      return false;
    } catch (error) {
      console.log("Register Error:", error);
      return false;
    }
  };

  // ✅ LOGOUT
  const logout = async () => {
    try {
      localStorage.removeItem("token"); // 🔥 IMPORTANT
      setUser(null);
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


