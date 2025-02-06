import { useFetch } from "./useFetch";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import IntroSection from "./components/IntroSection";
import "./App.css";

function App() {
  const { data } = useFetch("https://rickandmortyapi.com/api/character/1,2,3");

  return (
    <>
      <div className="Container">
        <Sidebar />
        <Navbar />
        <div className="subContainer">
          <IntroSection/>
          <div>
            <StatsCard title="hols" value={23} />
            <StatsCard title="hols" value={23} />
          </div>
          
        </div>
      </div>

      {/* <div>
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
      </div> */}
    </>
  );
}

export default App;
