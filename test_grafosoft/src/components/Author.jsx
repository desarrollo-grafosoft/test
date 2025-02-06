import "react";
import { useFetch } from "../useFetch";
import "../styles/author.css";

const Author = () => {
  const { data } = useFetch("https://rickandmortyapi.com/api/character/1,2,3");

  return (
    <>
      <div className="author">
        <div>
          {data?.length > 0 ? (
            data.map((character) => (
              <div key={character.id} className="cardA">
                <img src={character.image} alt={character.name}  className="imgA"/>
                <h3>{character.name}</h3>
              </div>
            ))
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Author;
