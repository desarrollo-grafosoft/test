import "react";
import "../styles/sidebar.css";
import libroS from "../assets/libroS.jpg"

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="imgLibro">
          <img src={libroS} alt="" />
        </div>
        
        <ul>
          <li> <strong> {">"}  Inicio </strong></li>
          <li> Libros</li>
          <li> Editores</li>
          <li> Lectores</li>
        </ul>
        <button className="create"> Crear ✚</button>
      </aside>
    </>
  );
};

export default Sidebar;
