import "react";
import "../styles/tipsSection.css";
import libros from "../assets/libros.svg";

const TipsSection = () => {
  return (
    <>
    <div className="tipsSection">
      <div>
        <h3>Andrés, nos gusta tu contenido y queremos darte estos consejos:</h3>
        <ol>
          <li>Lee los comentarios de tus lectores.</li>
          <li>Elige el género que quieres para tu público.</li>
          <li>Busca siempre a un editor de confianza.</li>
        </ol>
      </div>
      <img src={libros} alt="libros"/>
    </div>
    
    </>
    
  );
};

export default TipsSection;
