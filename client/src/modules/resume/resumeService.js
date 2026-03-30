import API from "../../utils/api";

export const uploadResume = async (file) => {
  try {
    const formData = new FormData();
    formData.append("resume", file);

    const { data } = await API.post("/ai/resume", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};