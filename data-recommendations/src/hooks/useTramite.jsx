import { useState, useEffect } from "react";
import tramiteService from "../services/tramiteService";
import { notification } from "antd";

export const useTramite = () => {
  const [error, setError] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    if (error) {
      notification.open({
        type: "error",
        message: "Error!",
        description: error,
      });
    }
    if (recommendations) {
      notification.open({
        type: "success",
        message: "Recomendaciones obtenidas con éxito!",
        description: `Se han encontrado ${recommendations.length} recomendaciones.`,
      });
    }
  }, [error, recommendations]);

  const handleGetRecomendations = async (concept) => {
    if (concept === "" || concept === null || concept === undefined) {
      setError("No concept passed!");
      return;
    }

    try {
      const recommendationData = await tramiteService.getSuggestions(concept);
      if (
        !recommendationData ||
        recommendationData.error ||
        recommendationData.status === 404
      ) {
        setError("Concept not found!");
        return;
      }
      setRecommendations(recommendationData);
      return recommendationData;
    } catch (error) {
      console.error("Error al recoger las recomendaciones: ", error);
      if (error.response && error.response.status === 404) {
        setError("Concept not found!");
      } else {
        setError(error.message || "Error al obtener las recomendaciones");
      }
      throw error;
    }
  };

  return {
    handleGetRecomendations,
    recommendations,
  };
};
