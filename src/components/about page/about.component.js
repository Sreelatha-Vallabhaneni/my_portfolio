import React from 'react';
import myImage from "../../images/sreelatha.jpg";
import "./about.styles.css";

function About(){
    return (
      <div className="about-container">
        <span className="about-text">
          <h1>
            About <span className="me">Me</span>
          </h1>
          <p>
            I am an energetic and imaginative young web developer trainee,
            passionate about creating user friendly and responsive websites
            while being motivated to learn new technologies in a fast pace.
            proven experience and success working as software test engineer as
            an individual and team member. comprehensive talents across the
            design development, testing, debugging and documentation of
            applications.
          </p>
          <button className="btn-cv-download">
            <b>Download CV</b>
          </button>
        </span>
        <img className="my-image" src={myImage} alt="sreelatha vallabhaneni" />
      </div>
    );
}

export default About;