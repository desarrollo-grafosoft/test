import "./CardInspiracion.css"
import { FaPlus } from "react-icons/fa";

function CardInspiracion() {
    return(
    
        <div className="card-inspiracion">
            <div className="card-inspiracion-text">
                <p className="card-inspiracion-text-tittle">Hola, Andres! Tienes ideas Sobre un nuevo libro?</p>
                <div className="card-inspiracion-text-item">
                    <p>Vuelve tus libros tendencia mundial!</p>
                    <p>Quieres empezar a escribir una vez más?</p>
                </div>
                <button className="button-create">Crear Borrador <FaPlus /></button>
            </div>
            <img src="/plant.png" alt="plant" />
        </div>
    )
}

export { CardInspiracion }