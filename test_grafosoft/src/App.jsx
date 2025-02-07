import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import IntroSection from "./components/IntroSection";
import Card from "./components/Card";
import Intro from "./components/Intro";
import RecentActivity from "./components/RecentActivity";
import TipsSection from "./components/TipsSection";
import Author from "./components/Author";
import hoja from "./assets/hojas.jpg";
import espacio from "./assets/espacio-tierra.jpg"

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="subContainer">
          <Navbar />
          <IntroSection />
          <div className="contentS">
            <div className="sectionA" >
              <div className= "statsC" >
                <StatsCard title="Librería" value="124" />
                <StatsCard title="Me Gusta" value="155k" />
                <StatsCard title="Lectores" value="8k" />
                <StatsCard title="Opiniones" value="163k" />
              </div>
              <Author></Author>
            </div>
            
            <RecentActivity></RecentActivity>
          </div>
          
          
          <TipsSection></TipsSection>
        </div>

        <div className="container3">
          <div className="nav" >
            aa
          </div>
          <div className="backgroundL">
            <Intro></Intro>
            <Card
              image={hoja}
              title="La Ciudadela"
              description="Descubre las maravillas escondidas en el bosque de EE.UU."
              author="David Jones"
              date="May 6, 2020"
            />
            <Card
              image={espacio}
              title="Space X"
              description="Elon Musk, un emprendedor con visión multimillonaria."
              author="Lauren Murphy"
              date="May 3, 2020"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
