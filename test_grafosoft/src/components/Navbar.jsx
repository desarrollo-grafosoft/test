import "react";
import "../styles/navbar.css"


const Navbar = () => {
    return (
      <nav className="navbar">
        <input
          type="text"
          placeholder="  🔍  Buscar por libros, personas ó articulos"
        />
      </nav>
    );
}

export default Navbar;