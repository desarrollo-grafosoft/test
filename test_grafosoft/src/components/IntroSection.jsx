import "react";
import "../styles/IntroSection.css";
import libro from "../assets/libro.png";

const IntroSection = () => {
    return (
      <div className="intro-section">
        <div className="content" >
          <h3>Hola, Andrés! Tienes ideas sobre un nuevo libro?</h3>
          <p>Vuelve tus libros tendencia mundial!</p>
          <p>Quieres empezar a escribir una vez más?</p>
          <button>Crear Borrador  ✚</button>
        </div>
        <img src={libro} alt="libro" />
      </div>
    );
};

export default IntroSection;