import "./Authors.css"

function AuthorsItems({ llave, name, image, status, species, gender }) {
    return (
        <div key={llave} className="AuthorItem">
            <div className="text-item">
                <img className="img" src={image} alt={`${name} - ${species}`} />
                <div className="img-item">
                    <p className="tittle-item">{name}</p>
                    <p>{status} - {gender}</p>
                </div>
            </div>
            <p>{species}</p>
        </div>
         
    )
}

export { AuthorsItems }