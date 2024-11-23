import "./Breadcrumb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faCopy,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Dropdown, Menu } from "antd";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

const BreadCrumb = () => {
  // Función para obtener la fecha y hora oficial
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

  // Estado para almacenar la hora actual
  const [hour, setHour] = useState(obtenerFechaHoraOficial());

  // Estado para gestionar el idioma
  const [idioma, setIdioma] = useState("ca");

  // Estado para gestionar el despliegue del menú
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // useEffect para actualizar la hora cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(obtenerFechaHoraOficial());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Opciones del menú desplegable
  const menu = (
    <Menu
      onClick={(e) => {
        setIdioma(e.key);
        setIsDropdownOpen(false); // Cerrar menú al seleccionar
      }}
      items={[
        { key: "ca", label: "Català" },
        { key: "es", label: "Español" },
      ]}
    />
  );

  // Textos dependiendo del idioma seleccionado
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

        {/* Idioma con Dropdown */}
        <span className="breadcrumb-item idioma">
          <FontAwesomeIcon icon={faGlobe} /> {textos[idioma].idioma}
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            placement="bottom"
            onOpenChange={(open) => setIsDropdownOpen(open)}
          >
            <span className="dropdown-trigger">
              <span
                className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              >
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
