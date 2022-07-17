import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
    return (
        <div className="hero">

            <div className="hero__photo">
                <img src={hero.image} alt=""></img>
            </div>

            <div className="hero__title">
                <h2>
                    {hero.name}
                </h2>
                <h3>
                    {hero.title} 
                </h3>
            </div>

            <div className="hero__info">
               
               <p>🏙 {hero.city}</p>
               <p>🎂 {hero.birthday}</p>
               <p>
                   📬 <a href={"mailto:" + hero.email}>dani.martinez@tutanota.com</a>
               </p>
           </div>

           <div className="hero__logos">
               <a href={hero.github}>
                   <img className="hero__logo01" src="https://img.icons8.com/material-rounded/48/000000/github.png" alt="gitHub"></img>
               </a>
               <a href={hero.linkedin}>
                   <img className="hero__logo02" src="https://img.icons8.com/color/48/000000/linkedin.png" alt="gitHub"></img>
               </a>

           </div>

        </div>
    );
};

export default Hero;