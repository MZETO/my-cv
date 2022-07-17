import React from "react";
import "./More.css";

const More = ({ languages, habilities }) => {
  return (
    <div className='more'>
      <h1>
        {"<"} SOFT-SKILLS {"/>"}
      </h1>
      <div className='more__habilities'>
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>🔧 {item}</p>
            </div>
          );
        })}
      </div>

      <h1>
        {"<"} IDIOMAS {"/>"}
      </h1>
      <div className='more__languages'>
        <h2>{languages.language}</h2>
        <p>✍🏻 {languages.wrlevel}</p>
        <p>🗣️ {languages.splevel}</p>
      </div>
    </div>
  );
};

export default More;
