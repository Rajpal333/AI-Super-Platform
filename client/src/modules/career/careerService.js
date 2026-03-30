import API from "../../utils/api";

export const generateCareer = async (data) => {
  const response = await API.post("/ai/career", data);
  return response.data;
};