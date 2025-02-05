import "./Recent.css"

function RecentItem({llave, personaje, texto, fecha}) {
    return (
        <div key={llave} className="recent-item">
            <div className="text-Recent">
                <p><span>{personaje} </span>{texto}</p>
            </div>
            <h6>{fecha}</h6>
        </div>
         
    )
}

export { RecentItem }