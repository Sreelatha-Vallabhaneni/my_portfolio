import React from 'react';
import myImage from '../images/sreelatha.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import "./home.styles.css";

export default function home(){
    return (
      <div className="home-container">
        <div>
          <h1 className="content-name">I'M Sreelatha Vallabhaneni</h1>
          <h4 className="content-role">
            <span className="alphabet-A">A</span> Full-Stack Web Developer.
          </h4>
          <button className="linkedin">
            <FontAwesomeIcon className="icon-link" icon={faLinkedinIn} />
          </button>
          <button className="linkedin">
            <FontAwesomeIcon className="icon-link" icon={faGithub} />
          </button>
        </div>
        <img className="my-image" src={myImage} alt="sreelatha vallabhaneni" />
      </div>
    );
};