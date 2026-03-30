import { useEffect, useState } from "react";
import API from "../utils/api";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [imageFile, setImageFile] = useState(null);
  const [activityModal, setActivityModal] = useState(null);
  const [saving, setSaving] = useState(false);

  // 🟢 Fetch all data
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [profileRes, statsRes, activityRes] = await Promise.all([
        API.get("/auth/profile"),
        API.get("/auth/stats"),
        API.get("/auth/activity"),
      ]);
      setUser(profileRes.data.user);
      setStats(statsRes.data.stats);
      setActivities(activityRes.data.activities);
      setForm({
        name: profileRes.data.user.name,
        email: profileRes.data.user.email,
        password: "",
      });
    } catch (err) {
      console.log("Profile Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔄 Handle input changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // 📤 Update profile
  const handleUpdate = async () => {
    try {
      setSaving(true);
      let updatedUser = { ...form };

      // Upload profile image if changed
      if (imageFile) {
        const formData = new FormData();
        formData.append("profilePic", imageFile);
        const uploadRes = await API.post("/auth/upload-profile-pic", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (uploadRes.data.success) updatedUser.profilePic = uploadRes.data.url;
        else {
          alert("❌ Image Upload Failed!");
          setSaving(false);
          return;
        }
      }

      const res = await API.put("/auth/update-profile", updatedUser);
      if (res.data.success) {
        setUser(res.data.user);
        alert("✅ Profile Updated!");
        setEditMode(false);
      } else alert("❌ Update Failed!");
    } catch (err) {
      console.log(err);
      alert("❌ Update Failed!");
    } finally {
      setSaving(false);
    }
  };

  // 📂 Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) setImageFile(e.target.files[0]);
  };

  // 🚪 Logout
  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      navigate("/login");
    } catch (err) {
      console.log("Logout failed:", err);
      alert("❌ Logout Failed!");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Loading Profile...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white p-6">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4 bg-black/80 backdrop-blur-md sticky top-0 z-50 shadow-lg mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-xl transition"
          >
            Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-xl transition"
          >
            Logout
          </button>
        </div>
        <h1 className="text-2xl font-bold">Profile</h1>
      </nav>

      {/* PROFILE CARD */}
      {user && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl p-6 rounded-3xl border border-white/20 mb-10 flex flex-col md:flex-row items-center gap-6 shadow-xl"
        >
          {/* Profile Image */}
          <div className="relative">
            <img
              src={
                imageFile
                  ? URL.createObjectURL(imageFile)
                  : user.profilePic ||
                    `https://ui-avatars.com/api/?name=${user.name}&background=6366f1&color=fff&size=128`
              }
              alt="profile"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white/20 shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => document.getElementById("profilePicInput").click()}
            />
            <input
              type="file"
              id="profilePicInput"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-black rounded-full"></span>
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            {!editMode ? (
              <>
                <h2 className="text-3xl font-bold">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
                <button
                  onClick={() => setEditMode(true)}
                  className="mt-3 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-xl transition"
                >
                  Edit Profile
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="New Password"
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <div className="flex gap-3 justify-center md:justify-start mt-2">
                  <button
                    onClick={handleUpdate}
                    disabled={saving}
                    className={`bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-xl transition ${
                      saving ? "cursor-not-allowed bg-blue-300" : ""
                    }`}
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-xl transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Stats */}
      {stats && (
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {Object.entries(stats).map(([key, value], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-center shadow-lg hover:scale-105 transition cursor-pointer"
            >
              <h3 className="capitalize text-gray-300">{key}</h3>
              <p className="text-4xl font-extrabold text-blue-400 mt-2">{value}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Activities */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl">
        <h2 className="text-2xl font-semibold mb-6">📜 Recent Activity</h2>
        {activities.length === 0 ? (
          <p className="text-gray-400">No activity yet</p>
        ) : (
          <div className="space-y-4">
            {activities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-black/40 p-4 rounded-xl border border-gray-700 hover:bg-black/60 cursor-pointer transition"
                onClick={() => setActivityModal(item)}
              >
                <p className="text-gray-200 font-medium">
                  {item.tool} - {item.type} - {new Date(item.createdAt).toLocaleString()}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Activity Modal */}
      <AnimatePresence>
        {activityModal && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button
                onClick={() => setActivityModal(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold z-50"
              >
                ×
              </button>
              <h3 className="text-xl font-semibold mb-3">{activityModal.tool}</h3>
              <p className="text-gray-300 mb-2">
                <strong>Type:</strong> {activityModal.type}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Description:</strong> {activityModal.description}
              </p>
              <p className="text-gray-400 text-sm">
                {new Date(activityModal.createdAt).toLocaleString()}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;




