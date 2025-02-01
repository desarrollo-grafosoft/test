import "./Item.css"

function Item() {
     const listItem = [
        {name: "Librería", number:"124"},
        {name: "Me Gusta", number:"155 k"},
        {name: "Lectores", number:"8 k"},
        {name: "Opiniones", number:"163 k"}
    ]
    return (
         <div className="item-container">
             {listItem.map((item) => (
                 <div key={item.number} className="item-element">
                     <p className="name">{item.name}</p>
                     <h3 className="number">{item.number}</h3>
                 </div>
             ))} 
        </div>
    )
}

export { Item }