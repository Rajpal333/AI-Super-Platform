import API from "../../utils/api";

export const generateEmail = async (prompt) => {
  try {
    const { data } = await API.post("/ai/email", { prompt });
    return data;
  } catch (error) {
    console.log("Email.Error",error);
    throw error;
  } 
};