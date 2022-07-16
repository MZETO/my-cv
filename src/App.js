import { useState } from "react";
import './App.css';
import { Hero, About, Education, Experience, More } from "./components";
import { CV } from "./CV/CV";

/* Hacemos destructuring para facilitar el acceso a las propiedades de CV.js */
const { hero, education, experience, languages, habilities } = CV;

function App() {
  
  const [showExperience, setShowExperience] = useState(true);
  
  return (

    <div className="App">

      <Hero hero={hero}/>

      <About hero={hero}/>

      <div className="buttons">
        <button onClick={() => setShowExperience(true)}>
          EXPERIENCIA
        </button>

        <button onClick={() => setShowExperience(false)}>
          EDUCACIÓN
        </button>
      </div>

      <div>
        {showExperience ? (<Experience experience={experience}/>) : (<Education education={education}/>)}
      </div>

      <More 
        languages={languages}
        habilities={habilities}
      />
      
    </div>
  );
}

export default App;
