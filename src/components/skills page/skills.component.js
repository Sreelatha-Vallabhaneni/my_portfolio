import React from "react";
import DevSkills from './devSkills.component';
import Languages from './languages.component';
import './skills.styles.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>
        My <span>Skills</span>
      </h1>
      <div className="skills-flex">
        <DevSkills />
        <Languages />
        <div className="work-skills">
          <div className="skill-title">
            <h2>Testing Skills</h2>
          </div>
          <div className="skill-set-container">
            <div className="skill-set">
              <h4>Test Cases</h4>
              <div className="s-b-bar">
                <div className="s-bar tc"></div>
              </div>
            </div>
            <div className="skill-set">
              <h4>Blackbox Testing</h4>
              <div className="s-b-bar">
                <div className="s-bar bb"></div>
              </div>
            </div>
            <div className="skill-set">
              <h4>QC</h4>
              <div className="s-b-bar">
                <div className="s-bar qc"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-skills">
          <div className="skill-title">
            <h2>Certificates</h2>
          </div>
          <div className="skill-set-container cert">
            <h4><span>&#9755;</span> ISTQB</h4>
            <h4><span>&#9755;</span> Prøve Dansk 2 (PD2)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
