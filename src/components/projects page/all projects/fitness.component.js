import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ProjectsLink from '../projects-link-button.cmponent';

function Fitness() {
  const link = "https://cosmic-cheesecake-a11714.netlify.app/";
  return (
    <div className="fitness-project">
    <div className="fitness-link">
      <a
        href="https://github.com/Sreelatha-Vallabhaneni/FitnessApp-React-Typescript/tree/main/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ProjectsLink />
      </a>
        <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer" 
        >
            <button className="btn-icons">
                <FontAwesomeIcon className="icon eye" icon={faEye} />
            </button>
        </a>
    </div>
  </div>
  )
}

export default Fitness