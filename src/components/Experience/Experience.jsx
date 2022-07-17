import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
    return (
        <div className="experience">
            <h1>{"<"} EXPERIENCIA {"/>"}</h1>
            <div className="experience__container">
                {experience.map((item) => {
                    return (
                        <div className="experience__card" key={JSON.stringify(item)}>
                            <h2 className="experience__name">👨🏻‍💻 {item.name}</h2>
                            <p>{item.date}</p>
                            <h3>{item.where}</h3>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;