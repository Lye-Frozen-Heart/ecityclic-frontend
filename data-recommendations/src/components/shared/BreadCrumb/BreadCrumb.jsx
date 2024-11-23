import "./Breadcrumb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const BreadCrumb = () => {
  const [hour, setHour] = useState(obtenerFechaHoraOficial());
  const obtenerFechaHoraOficial = () => {
    const opcionesFecha = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const opcionesHora = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString("ca-ES", opcionesFecha);
    const hora = ahora.toLocaleTimeString("ca-ES", opcionesHora);
    return `Data i hora oficial: ${fecha}, ${hora}`;
  };
  useEffect(() => {}, [hour]);

  return (
    <div className="breadcrumb-main">
      <section className="first-section">
        <span className="breadcrumb-item paeria-title">paeria.cat</span>
        <span className="breadcrumb-item ajuda">
          <FontAwesomeIcon icon={faQuestionCircle} /> AJUDA
        </span>
        <span className="breadcrumb-item">VALIDADOR DE DOCUMENTS</span>
        <span className="breadcrumb-item">IDIOMA</span>
      </section>
      <section className="second-section">{obtenerFechaHoraOficial()}</section>
    </div>
  );
};
export default BreadCrumb;
