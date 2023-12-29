import React from 'react';
import myImage from "../../images/sreelatha3.JPG";
import resume from '../../assets/Sreelatha Vallabhaneni.pdf';
//import recommendation from '../../assets/Recommendation letter.pdf';
import feedback from '../../assets/feedback.png';
import "./about.styles.css";


function About(){
    return (
      <div>
      <div className="about-container">
        <div className="about-text">
          <h1>
            About <span className="me">Me</span>
          </h1>
          <p>
            Dedicated and experienced Frontend Developer with over 3 years of professional experience in designing and implementing intuitive, responsive, and visually appealing web applications. 
            Proficient in HTML, CSS, JavaScript, TypeScript, and leading frontend frameworks such as React and NextJS. 
            Demonstrated success in optimizing website performance, ensuring cross-browser compatibility, and delivering exceptional user experiences. 
            Committed to continuous learning, staying at the forefront of emerging technologies, and leveraging innovative frontend development to drive results.
          </p>
          {/* <p>
            I am an energetic and imaginative young web developer, passionate
            about creating user friendly and responsive websites while being
            motivated to learn new technologies in a fast pace. proven
            experience and success working as software test engineer as an
            individual and team member. comprehensive talents across the design
            development, testing, debugging and documentation of applications.
          </p> */}
          <div className="btns">
            <a href={resume} className="download-link btn" target="_download">
              <button className="btn-cv-download">
                <b>Download CV</b>
              </button>
            </a>
            {/* <a
              href={recommendation}
              className="recommendation btn"
              target="_download"
            >
              <button className="btn-recommendation">
                <b>Recommendation Letter</b>
              </button>
            </a> */}
          </div>
        </div>
        <div className="abt-img">
          <img
            className="my-image"
            src={myImage}
            alt="sreelatha vallabhaneni"
          />
        </div>
      </div>
      <div className="feedback">
        <img src={feedback} alt="freetrailer-feedback" width="500px" />
      </div>
      </div>
    );
}

export default About;