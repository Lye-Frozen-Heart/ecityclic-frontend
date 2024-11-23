import httpService from "./httpService";
const tramiteApiUrl = `${import.meta.env.VITE_API_URL}`;

const getSuggestions = async () => {
  const suggestedData = await httpService.fetchData(tramiteApiUrl, "GET");
  return suggestedData;
};

export default {
  getSuggestions,
};
