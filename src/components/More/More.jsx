import React from "react";
import "./More.css";

const More = ({ languages, habilities }) => {
    return (
        <div className="more">
        
            <div className="more__languages">
                <h1>IDIOMAS</h1>
                <h3>{languages.language}</h3>
                <p>✍🏻 {languages.wrlevel}</p>
                <p>🗣️ {languages.splevel}</p>
            </div>

            <div className="more__habilities">
                <h1>SOFT-SKILLS</h1>
                {habilities.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <p>🔧 {item}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default More;