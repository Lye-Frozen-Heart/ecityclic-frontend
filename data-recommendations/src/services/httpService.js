const fetchData = async (url, method = "GET", body = null, params = null) => {
  try {
    // Asegurarte de usar la URL base
    let baseUrl = import.meta.env.VITE_API_URL;
    

    // Agregar parámetros codificados si existen
    if (params) baseUrl += `${encodeURIComponent(params)}`;

    // Configurar las opciones de la solicitud
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };

    if (body) options.body = JSON.stringify(body);

    // Realizar la solicitud
    const response = await fetch(baseUrl, options);

    // Validar el estado HTTP
    if (!response.ok) {
      const error = await response.text();
      console.error(
        `HTTP Error! Status: ${response.status}, Error message: ${error}`
      );
      return null;
    }

    // Parsear la respuesta a JSON
    let data;
    try {
      data = await response.json();
    } catch (err) {
      console.error("La respuesta no es un JSON válido:", err);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default {
  fetchData,
};
