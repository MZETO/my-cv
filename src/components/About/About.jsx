import React from "react";
import "./About.css";

const About = ({ aboutme }) => {
    return (
        <div className="about">
            <h1>{"<"} SOBRE MÍ {"/>"}</h1>
            <div className="about__info">
                <p>{aboutme.cuote1}</p>
                <p>{aboutme.cuote2}</p>
                <p>{aboutme.cuote3}</p>
                <h2>{aboutme.cuote4}</h2>            
                <img src="https://skills.thijs.gg/icons?i=html,css,sass,js,typescript,angular,react,git,nodejs,linux" alt="techs"></img>
            </div>
        </div>
    );
};

export default About;