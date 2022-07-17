import React from "react";
import "./About.css";

const About = ({ hero }) => {
    return (
        <div className="about">
            <h1>{"<"} HARD-SKILLS {"/>"}</h1>
            <div className="about__info">            
                <img src="https://skills.thijs.gg/icons?i=html,css,js,angular,react,git" alt="techs"></img>
            </div>
        </div>
    );
};

export default About;