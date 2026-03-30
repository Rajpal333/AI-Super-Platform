const Activity = require("../models/Activity");

const saveActivity = async (data) => {
  try {
    // ✅ Basic validation
    if (!data) {
      throw new Error("No activity data provided");
    }

    const activity = await Activity.create(data);

    return activity; // ✅ return useful data

  } catch (error) {
    console.error("Activity Error:", error); // ✅ full error

    return null; // ✅ safe fallback
  }
};

module.exports = { saveActivity };