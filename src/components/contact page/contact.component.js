import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import './contact.styles.css';

function Contact(){
    return (
      <div className="contact-container">
        <h1>
          Contact <span>Me</span>
        </h1>
        <div className="contact-links">
          <div className="phn">
            <FontAwesomeIcon className="icon-phn fw" icon={faPhone} />
            <p>
              <span className="fw-text">Call me on</span>
            </p>
            <p>
              <span className="sub-text">+45-71665956</span>
            </p>
          </div>
          <div className="mail">
            <FontAwesomeIcon className="icon-mail fw" icon={faEnvelope} />
            <p>
              <span className="fw-text">Email me at</span>
            </p>
            <p>
              <span className="sub-text">sreelatha.vallabhaneni@gmail.com</span>
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/sreelatha-vallabhaneni-37a406b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon-linkedin fw" icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Sreelatha-Vallabhaneni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon-github fw" icon={faGithub} />
            </a>
          </div>
        </div>
        <div style={{ fontSize: "13px", letterSpacing:'0.9px' }}>
          Made with<span className="luv" style={{}}>&#9829;</span>and passion
        </div>
      </div>
    );
}

export default Contact;