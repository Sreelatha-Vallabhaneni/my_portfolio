import React from 'react';
import myImage from "../../images/sreelatha3.JPG";
import resume from '../../assets/Sreelatha Vallabhaneni.pdf';
import "./about.styles.css";


function About(){
    return (
      <div className="about-container">
        <div className="about-text">
          <h1>
            About <span className="me">Me</span>
          </h1>
          <p>
            I am an energetic and imaginative young web developer, passionate
            about creating user friendly and responsive websites while being
            motivated to learn new technologies in a fast pace. proven
            experience and success working as software test engineer as an
            individual and team member. comprehensive talents across the design
            development, testing, debugging and documentation of applications.
          </p>
          <a
            // href="https://www.dropbox.com/s/p1isvwrv0l1ozkj/Sreelatha%20Vallabhaneni.pdf?dl=0"
            href={resume}
            className="download-link"
            target="_download"
          >
            <button className="btn-cv-download">
              <b>Download CV</b>
            </button>
          </a>
        </div>
        <div className="abt-img">
          <img
            className="my-image"
            src={myImage}
            alt="sreelatha vallabhaneni"
          />
        </div>
      </div>
    );
}

export default About;