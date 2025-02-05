import "./Authors.css"
import { useFetch } from "../ApiFetch/useFetch"
import { AuthorsItems } from "./AuthorsItems";

function AuthorsContainer() {

    const {data,loading,error} = useFetch("https://rickandmortyapi.com/api/character");

    return (
        
        <div className="container-global">
            <div className="container-author">
                <h3 className="head-title">Autores</h3>
                <button className="view-all-button">Ver Todo</button>
                    {data.results && data.results.map((item) => (
                        <AuthorsItems 
                        key={item.id}
                        llave={item.id}
                        name={item.name}
                        image={item.image}
                        status={item.status}
                        species={item.species}
                        gender={item.gender}
                        />
                ))} 
           </div>
        </div>
    )
}

export { AuthorsContainer }