import React from 'react';
import Typical from "react-typical";
import "./home.styles.css";

export default function home(){
    return (
      <div className="home-container">
        <div className="res-text">
          <div className="home-text">
            <h1 className="content-name">I'M Sreelatha Vallabhaneni</h1>
            <h4 className="content-role">
              <span className="alphabet-A">A </span>
              <Typical
                steps={["Full-Stack Web Developer.", 1000, "Software Tester.", 500]}
                loop={Infinity}
                wrapper="p"
              />
            </h4>
          </div>
        </div>
      </div>
    );
};