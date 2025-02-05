import "./Menu.css"
import { FaBook } from "react-icons/fa";

function Menu() {
    return (
        <div className="menu">
            <FaBook className="imagen" />
            <ul className="lista">
                <li className="active">Inicio</li>
                <li>Libros</li>
                <li>Editores</li>
                <li>Lectores</li>
            </ul>
            <button className="button">Crear +</button>
        </div>
    )
}

export { Menu }