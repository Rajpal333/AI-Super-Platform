import API from "../../utils/api";

export const analyzeCode = async (code, language) => {
  const { data } = await API.post("/ai/code-review", {
    code,
    language,
  });
  return data;
};