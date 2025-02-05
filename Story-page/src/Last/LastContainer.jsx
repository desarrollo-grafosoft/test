import "./Last.css"
import { Last } from "./Last";

function LastContainer() {

    const list = [
        {id:1, imagen1:"./img1.png", name:"La Ciudadela", texto:"Descubre las maravillas escondidas en lo bosques de Estados Unidos", imagen2: "./David.png", personaje:"David Jones", fecha: "May 6, 2020"},
        {id:2, imagen1:"./Img2.png", name:"Space x", texto:'Elon Musk, un emprendedor con otra visión multimillonaria', imagen2:"./Lauren.png", personaje:"Lauren Murphy", fecha:"May 3, 2020"}
    ]

    return (
        
        <div className="last-container">
            <div className="container-last">
                <div className="tittle-last">
                    <h3 className="head-title">Lo último</h3>
                    <button className="view-button-last">Ver Todo</button>
                </div>
                <ul className="list-last">
                    <li className="active"> Reciente</li>
                    <li> Popular</li>
                </ul>
                <div className="last-text-container">
                    {list.map((item) => (
                            <Last
                            key={item.id}
                            llave={item.id}
                            img1={item.imagen1}
                            name={item.name}
                            texto={item.texto}
                            img2={item.imagen2}
                            personaje={item.personaje}
                            fecha={item.fecha}
                            
                             
                            />
                    ))} 
                </div>
                   
           </div>
        </div>
    )
}

export { LastContainer }