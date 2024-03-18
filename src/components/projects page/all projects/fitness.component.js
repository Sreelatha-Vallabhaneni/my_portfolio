import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { DialogActions } from '@material-ui/core';
import Modal from "../modal.component";
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
      {/* <Modal>
        <div className="modal-title">
          <h1>Mealsharing App</h1>
        </div>
        <DialogActions>
            <div className="dialog-actions">
                <h3>Features</h3>
                <span>
                <p>React JS</p>
                <p>Typescript</p>
                <p>Tailwind CSS</p>
                <p>Vite</p>
                <p>Heroicons</p>
                <p>Git</p>
                <p>Github</p>
                <p>Framer-motion</p>
                <p>Netlify</p>
                </span>
                <h3>Summary</h3>
                <p>
                Developed a MealSharing app as a Full-Stack application, there is an availability to view and review the meals, having a form for book a seat for specific meal,  having a chance to create a meal. Used MYSQL for Database, and used Heroku for deployment. {" "}
                </p>
            </div>
        </DialogActions>
      </Modal> */}
    </div>
  </div>
  )
}

export default Fitness