import React from "react";
import "./About.css";

const About = ({ hero }) => {
    return (
        <div className="about">

            <h1>SOBRE MÍ</h1>
            
            <p>{hero.coute1}</p>
            <p>{hero.coute2}</p>
            <img src="https://skills.thijs.gg/icons?i=html,css,js,angular,react,git" alt="techs"></img>
       
        </div>
    );
};

export default About;