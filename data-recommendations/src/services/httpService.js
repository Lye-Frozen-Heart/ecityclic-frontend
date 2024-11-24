const fetchData = async (url, method = "GET", body = null, params = null) => {
  try {
    if (params && params != "" && params != null && params != undefined) {
      url += `${encodeURIComponent(params)}`;
    }

    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };

    if (body) options.body = JSON.stringify(body);

    const response = await fetch(url, options);
    if (!response.ok) {
      const error = await response.text();
      console.error(
        `HTTP Error! Status: ${response.status}, Error message: ${error}`
      );
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default {
  fetchData,
};
