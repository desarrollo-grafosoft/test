import { useFetch } from "./useFetch";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const { data } = useFetch("https://rickandmortyapi.com/api/character/1,2,3");

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="subContainer">



      </div>
      <div>
        <p>Hola mundo</p>
        <div>
          {data?.length > 0 ? (
            data.map((character) => (
              <div key={character.id}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} />
              </div>
            ))
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
