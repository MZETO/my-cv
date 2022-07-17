import React from "react";
import "./Education.css";

const Education = ({ education }) => {
    return (
        <div className="education">
            <h1>{"<"} EDUCACIÓN {"/>"}</h1>
            <div className="education__container">
                {education.map((item) => {
                    return (
                        <div className="education__card" key={JSON.stringify(item)}>
                            <h2 className="education__name">🎓 {item.name}</h2>
                            <p>{item.date}</p>
                            <h3>{item.where}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;