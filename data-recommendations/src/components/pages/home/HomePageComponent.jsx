import { BreadCrumb } from "../../shared/index.js";
import { SearchImage } from "../../../assets/index.js";
import "./HomePageComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Space } from "antd";
import { useState, useEffect } from "react";
import CardsContainer from "../../shared/CardsContainer/CardsContainer.jsx";
import { useTramite } from "../../../hooks/useTramite.jsx";
const HomePageComponent = () => {
  const [inputValue, setInputValue] = useState(null);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [idioma, setIdioma] = useState("ca"); // Estado para el idioma
  const { handleGetRecomendations, recommendations } = useTramite();
  const handleInputValue = (value) => {
    setInputValue(value);
  };
  // Callback para cambiar el idioma
  const handleIdiomaChange = (newIdioma) => {
    setIdioma(newIdioma); // Actualiza el idioma
  };

  // Efecto para mostrar lentamente el subtítulo
  useEffect(() => {
    if (inputValue) {
      setShowSubtitle(false);
      const timer = setTimeout(() => {
        setShowSubtitle(true);
      }, 300); // Retraso de 300ms
      return () => clearTimeout(timer);
    } else {
      setShowSubtitle(false);
    }
  }, [inputValue]);
  console.log(inputValue);
  // Textos del placeholder dependiendo del idioma
  const textosPlaceholder = {
    ca: "Llicencia d'obres, concursos, calendari fiscal...",
    es: "Licencia de obras, concursos, calendario fiscal...",
  };

  return (
    <>
      <BreadCrumb onIdiomaChange={handleIdiomaChange} />{" "}
      {/* Pasamos el callback */}
      <div
        className="div-search"
        style={{ backgroundImage: `url("${SearchImage}")` }}
      >
        <Space.Compact
          style={{
            width: "100%",
            padding: "25%",
          }}
        >
          <Input
            prefix={<FontAwesomeIcon size="2x" icon={faSearch} />}
            onChange={(e) => handleInputValue(e.target.value)}
            placeholder={textosPlaceholder[idioma]}
            style={{ padding: "0.7em 0.6em", fontSize: "1rem" }}
          />
          <Button
            type="primary"
            className="button-input"
            onClick={() => handleGetRecomendations(inputValue)}
          >
            BUSCAR
          </Button>
        </Space.Compact>
      </div>
      <div style={{ margin: "5px" }}>
        {showSubtitle && (
          <h2 className="subtitle">
            {`Recomanacions en base a: ${inputValue}`}
          </h2>
        )}
      </div>
      <CardsContainer data={recommendations} />
    </>
  );
};

export default HomePageComponent;
