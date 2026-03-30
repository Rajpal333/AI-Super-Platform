 import API from "../../utils/api";

export const generateInterview = async (role, type) => {
  const { data } = await API.post("/ai/interview", {
    role,
    type
  });
  return data;
};