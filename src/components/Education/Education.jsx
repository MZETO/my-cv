import React from "react";
import "./Education.css";

const Education = ({ education }) => {
    return (
        <div className="education">
            <h1>EDUCACIÓN</h1>
            <div className="education__card">
                {education.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <h3 className="education__name">🎓 {item.name}</h3>
                            <p>{item.date}</p>
                            <h5>{item.where}</h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Education;