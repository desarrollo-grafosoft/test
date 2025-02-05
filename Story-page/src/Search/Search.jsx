import { FaSearch } from 'react-icons/fa';
import "./Search.css"

function Search(){
    return (
        <div className="search">
            <input placeholder="Buscar por libros, personas o articulos" className="input"/>
            <FaSearch className="search-icon" />
        </div>
    )
}

export {Search}