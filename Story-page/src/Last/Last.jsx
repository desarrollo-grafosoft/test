import "./Last.css"

function Last({ llave, img1,  name, texto, img2, personaje, fecha }) {
    return (
        <div key={llave} className="last-item">
            <img className="img1" src={img1} alt={name} />
            <div className="item-texto">
                <h4>{name}</h4>
                <p>{texto}</p>
                <div className="item-author">
                    <img className="img2" src={img2} alt={name} />
                    <div className="item2">
                        <h4>{personaje}</h4>
                        <p>{fecha}</p>
                    </div>
                </div>
            </div>
        </div>
         
    )
}

export { Last }