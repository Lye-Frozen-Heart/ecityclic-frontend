import { BreadCrumb } from "../../shared/index.js";
import { SearchImage } from "../../../assets/index.js";
import "./HomePageComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Space } from "antd";
import { useState, useEffect } from "react";
import CardsContainer from "../../shared/CardsContainer/CardsContainer.jsx";

const HomePageComponent = () => {
  const [inputValue, setInputValue] = useState(null);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const handleInputValue = (value) => {
    setInputValue(value);
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

  return (
    <>
      <BreadCrumb />
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
            placeholder="Llicencia d'obres,concursos,calendari fiscal..."
            style={{ padding: "0.7em 0.6em", fontSize: "1rem" }}
          />
          <Button
            type="primary"
            style={{
              height: "auto",
              padding: "20px",
              fontWeight: 500,
              fontSize: "0.9em",
            }}
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
      <CardsContainer data={null} />
    </>
  );
};

export default HomePageComponent;
