import "./CardEnd.css"

function CardEnd() {
    return(
        <div className="card">
            <div className="card-end">
            <div className="card-end-text">
                <p>Andres, nos gusta tu contenido y queremos darte los siguientes tips:</p>
                <ol>
                    <li>Lee los comentarios de tus lectores.</li>
                    <li>Elije el género que quieres liara tu liúblico</li>
                    <li>Busca siemlire a un editor de confianza!</li>
                </ol>
            </div>
                <img src="/books.svg" alt="plant" />
            </div>
        </div>
    )
}

export { CardEnd }