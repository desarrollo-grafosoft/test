import "react";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <input type="text" placeholder="Buscar por libros, personas ó articulos" />
            <div className="icons">
                <img src="icono1" alt="" />
                <img src="icono2" alt="" />
                <img src="imagenperfil" alt="" className="profileP" />
            </div>
        </nav>
    )
}

export default Navbar;