import "./Recent.css"
import { useFetch } from "../ApiFetch/useFetch"
import { RecentItem } from "./RecentItem";

function Recent() {

    const list = [
        {id:1, personaje:"Victoria Evans", texto:'Ha comentado en "La Ciudadela"', fecha: "May 7"},
        {id:2, personaje:"Ethan Williams", texto:'Ha comenzado a seguirte', fecha:"May 5"},
        {id:3, personaje:"Nathan Fox", texto:'le ha gustado "Inolvidable ', fecha:"May 1"},
        {id:4, personaje:"Megan Walsh", texto:'Ha comenzado a seguirte', fecha:"Apr 29"},
    ]

    return (
        
        <div className="recent">
            <div className="container-recent">
                <h3 className="head-title">Reciente</h3>
                <button className="view-button">Ver Todo</button>
                <div className="recent-text-container">
                    {list.map((item) => (
                            <RecentItem 
                            key={item.id}
                            llave={item.id}
                            personaje={item.personaje}
                            texto={item.texto}
                            fecha={item.fecha}
                            />
                    ))} 
                </div>
                   
           </div>
        </div>
    )
}

export { Recent }