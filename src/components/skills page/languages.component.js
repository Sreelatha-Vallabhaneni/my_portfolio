import React from 'react';
import './skills.styles.css';

function LanguageSkills(){
    return (
      <React.Fragment>
        <div className="work-skills">
          <div className="skill-title">
            <h2>Language Skills</h2>
          </div>
          <div className="skill-set-container">
            <div className="skill-set">
              <h4>
                Telugu <span style={{ fontSize: "13px" }}>(Native)</span>
              </h4>
              <div className="s-b-star">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
            </div>
            <div className="skill-set">
              <h4>
                English<span style={{ fontSize: "13px" }}>(Fluent)</span>
              </h4>
              <div className="s-b-star">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
              </div>
            </div>
            <div className="skill-set">
              <h4>
                Danish<span style={{ fontSize: "13px" }}>(Intermediate)</span>
              </h4>
              <div className="s-b-star">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
              </div>
            </div>
            <div className="skill-set">
              <h4>
                Swedish<span style={{ fontSize: "13px" }}>(Basic)</span>
              </h4>
              <div className="s-b-star">
                <span>&#9733;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
                <span>&#9734;</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default LanguageSkills;