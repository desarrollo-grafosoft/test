import { useFetch } from "./useFetch";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import IntroSection from "./components/IntroSection";
import Card from "./components/Card";
import Intro from "./components/Intro";
import RecentActivity from "./components/RecentActivity";
import TipsSection from "./components/TipsSection";
import "./App.css";

function App() {
  const { data } = useFetch("https://rickandmortyapi.com/api/character/1,2,3");

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="subContainer">
          <Navbar />
          <IntroSection />
          <div>
            <StatsCard title="Librería" value="124" />
            <StatsCard title="Me Gusta" value="155k" />
            <StatsCard title="Lectores" value="8k" />
            <StatsCard title="Opiniones" value="163k" />
          </div>
          <RecentActivity></RecentActivity>
          <TipsSection></TipsSection>
        </div>

        <div>
          <Intro></Intro>
          <Card
            image="https://via.placeholder.com/300"
            title="La Ciudadela"
            description="Descubre las maravillas escondidas en el bosque de EE.UU."
            author="David Jones"
            date="May 6, 2020"
          />
          <Card
            image="https://via.placeholder.com/300"
            title="Space X"
            description="Elon Musk, un emprendedor con visión multimillonaria."
            author="Lauren Murphy"
            date="May 3, 2020"
          />
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
