import React from 'react';
import "./home.styles.css";

export default function home(){
    return (
      <div className="home-container">
        <div className="home-text">
          <h1 className="content-name">I'M Sreelatha Vallabhaneni</h1>
          <h4 className="content-role">
            <span className="alphabet-A">A </span>
            Full-Stack Web Developer<br/> & Software Tester.
            {/* <div className="scroll-wrap">
              <span>Full-Stack Web Developer.</span>
              <span>Software Tester</span>
            </div> */}
          </h4>
        </div>
      </div>
    );
};