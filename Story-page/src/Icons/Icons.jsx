import "./Icon.css"
import { FaRegBell } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Icon() {
    return (
        <div className="icon">
            <FaRegBell className="icon-save bell" />
            <CiMail className="icon-save mail" />
            <div className="perfil">
                <h5>Andrés Vargas</h5>
                <img src="/perfil.png" alt="Andres Vargas foto" />
            </div>
        </div>
    )
}

export { Icon }