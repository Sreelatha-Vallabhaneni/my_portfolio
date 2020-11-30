import React from 'react';
import ReactJsTyping from "reactjs-typing-effect";
import "./home.styles.css";

export default function home(){
  const listOfString=["Full-Stack Web Developer.", "Software Tester."]
    return (
      <div className="home-container">
        <div className="res-text">
          <div className="home-text">
            <h1 className="content-name">I'M Sreelatha Vallabhaneni</h1>
            <h4 className="content-role">
              <span className="alphabet-A">A </span>
              <div>
                <ReactJsTyping StringList={listOfString} speed={1000} />
              </div>
            </h4>
          </div>
        </div>
      </div>
    );
};