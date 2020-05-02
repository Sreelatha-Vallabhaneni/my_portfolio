import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faFile, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import './navBar.styles.css';

export default function sideNav(){
    return (
      <div className="navbar-container">
        <span className="nav-txt">
          <p>Sreelatha</p>
          <p>Vallabhaneni</p>          
        </span>
        <button className="nav-btn">
          <FontAwesomeIcon className="icon-title" icon={faHome} />
          Home
        </button>
        <button className="nav-btn">
          <FontAwesomeIcon className="icon-title" icon={faUser} />
          About
        </button>
        <button className="nav-btn">
          <FontAwesomeIcon className="icon-title" icon={faFile} />
          Resume
        </button>
        <button className="nav-btn">
          <FontAwesomeIcon className="icon-title" icon={faWindowRestore} />
          Projects
        </button>
        <button className="nav-btn">
          <FontAwesomeIcon className="icon-title" icon={faEnvelope} />
          Contact
        </button>
      </div>
    );
}
