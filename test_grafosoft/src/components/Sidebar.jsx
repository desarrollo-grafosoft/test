import "react";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <h2> Dashboard</h2>
        <ul>
          <li> Inicio</li>
          <li> Libros</li>
          <li> Editores</li>
          <li> Lectores</li>
        </ul>
        <button className="create-btn"> Crear</button>
      </aside>
    </>
  );
};

export default Sidebar;
