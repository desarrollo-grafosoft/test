import "react";
import "../styles/introCard.css";

const Intro = () => {
    return (
      <>
        <div className="intro">
          <h3>Lo ultimo</h3>
          <button>Ver todo</button>
        </div>
        <div className="intro2">
          <p>
            <strong>Reciente </strong>
          </p>
          <p> Popular</p>
        </div>
      </>
    );
};

export default Intro;