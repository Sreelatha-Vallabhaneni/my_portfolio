import React from 'react';
import './skills.styles.css';

function DevSkills(){
    return (
      <div className="work-skills">
        <div className="skill-title">
          <div>
            <h2>Development Skills</h2>
          </div>
        </div>
        <div className="skill-set-container">
          <div className="skill-set">
            <h4>HTML5</h4>
            <div className="s-b-bar">
              <div className="s-bar html"></div>
            </div>
          </div>
          <div className="skill-set">
            <h4>CSS3</h4>
            <div className="s-b-bar">
              <div className="s-bar css"></div>
            </div>
          </div>
          <div className="skill-set">
            <h4>JavaScript</h4>
            <div className="s-b-bar">
              <div className="s-bar js"></div>
            </div>
          </div>
          <div className="skill-set">
            <h4>NodeJS</h4>
            <div className="s-b-bar">
              <div className="s-bar njs"></div>
            </div>
          </div>
          <div className="skill-set">
            <h4>MYSQL</h4>
            <div className="s-b-bar">
              <div className="s-bar sql"></div>
            </div>
          </div>
          <div className="skill-set">
            <h4>ReactJS</h4>
            <div className="s-b-bar">
              <div className="s-bar react"></div>
            </div>
          </div>
          <div className="skill-set">
            <h4>Git</h4>
            <div className="s-b-bar">
              <div className="s-bar git"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DevSkills;