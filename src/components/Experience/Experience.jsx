import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
    return (
        <div className="experience">
            <h1>EXPERIENCIA</h1>
            <div className="experience__card">
                {experience.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <h3 className="experience__name">👨🏻‍💻 {item.name}</h3>
                            <p>{item.date}</p>
                            <h5>{item.where}</h5>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;