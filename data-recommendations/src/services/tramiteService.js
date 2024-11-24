import httpService from "./httpService";
const tramiteApiUrl = `${import.meta.env.VITE_API_URL}`;

const getSuggestions = async (params) => {
  const suggestedData = await httpService.fetchData(
    tramiteApiUrl,
    "GET",
    null,
    params
  );
  return suggestedData;
};

export default {
  getSuggestions,
};
