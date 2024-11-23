import "./Breadcrumb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faCopy,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Dropdown } from "antd";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

const BreadCrumb = ({ onIdiomaChange }) => {
  const [idioma, setIdioma] = useState("ca");
  const [hour, setHour] = useState("");

  // Función para obtener la fecha y hora según el idioma
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
    const fecha = ahora.toLocaleDateString(
      idioma === "ca" ? "ca-ES" : "es-ES",
      opcionesFecha
    );
    const hora = ahora.toLocaleTimeString(
      idioma === "ca" ? "ca-ES" : "es-ES",
      opcionesHora
    );

    return idioma === "ca"
      ? `Data i hora oficial: ${fecha}, ${hora}`
      : `Fecha y hora oficial: ${fecha}, ${hora}`;
  };

  // Actualizar la hora cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(obtenerFechaHoraOficial());
    }, 1000);
    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [idioma]); // Recalcular la hora al cambiar el idioma

  // Configuración de los textos según idioma
  const textos = {
    ca: {
      paeria: "paeria.cat",
      ajuda: "AJUDA",
      validador: "VALIDADOR DE DOCUMENTS",
      idioma: "IDIOMA",
    },
    es: {
      paeria: "paeria.cat",
      ajuda: "AYUDA",
      validador: "VALIDADOR DE DOCUMENTOS",
      idioma: "IDIOMA",
    },
  };

  const items = [
    { key: "ca", label: <a>Català</a> },
    { key: "es", label: <a>Castellano</a> },
  ];

  // Manejar el cambio de idioma
  const handleIdiomaChange = (e) => {
    setIdioma(e.key);
    onIdiomaChange(e.key);
  };

  return (
    <div className="breadcrumb-main">
      <div className="first-section">
        <span className="breadcrumb-item paeria-title">
          {textos[idioma].paeria}
        </span>
        <span className="breadcrumb-item ajuda">
          <FontAwesomeIcon icon={faQuestionCircle} /> {textos[idioma].ajuda}
        </span>
        <span className="breadcrumb-item">
          <FontAwesomeIcon icon={faCopy} /> {textos[idioma].validador}
        </span>

        <span className="breadcrumb-item idioma">
          <FontAwesomeIcon icon={faGlobe} /> {textos[idioma].idioma}
          <Dropdown
            menu={{ items, onClick: handleIdiomaChange }}
            trigger={["click"]}
            placement="bottom"
          >
            <span className="dropdown-trigger">
              <span className={`dropdown-arrow`}>
                <FontAwesomeIcon icon={faAngleDown} size="1x" />
              </span>
            </span>
          </Dropdown>
        </span>
      </div>
      <div className="second-section">{hour}</div>
    </div>
  );
};

export default BreadCrumb;
