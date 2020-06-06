import React from "react";
import Modal from "../modal.component";
import { DialogActions } from "@material-ui/core";
import ReactHooksCarousel from "react-hooks-carousel";
import ProjectsLink from "../projects-link-button.cmponent";

function MealsharingProject() {
  return (
    <div className="mealsharing-project">
      <div className="mealsharing-link">
        <a
          href="https://hyf-meal-sharing-project.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectsLink />
        </a>
        <Modal>
          <div className="modal-title">
            <h1>Mealsharing App</h1>
          </div>
          <ReactHooksCarousel
            height="350px"
            width="550px"
            styleProp={{
              padding: "5px",
              background: "rgba(0,0,0,0.5)",
            }}
            pictures={[
              require("../../../images/mealsharing/ms-image1.png"),
              require("../../../images/mealsharing/ms-image2.png"),
              require("../../../images/mealsharing/ms-image3.png"),
            ]}
          />
          <DialogActions>
            <div className="dialog-actions">
              <h3>Features</h3>
              <span>
                <p>NodeJS</p>
                <p>Express</p>
                <p>MYSQL</p>
                <p>JavaScript</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Git</p>
                <p>Github</p>
                <p>Heroku</p>
              </span>
              <h3>Summary</h3>
              <p>
                Developed a MealSharing app as a Full-Stack application, there is an availability to view and review the meals, having a form for book a seat for specific meal,  having a chance to create a meal. Used MYSQL for Database, and used Heroku for deployment. {" "}
              </p>
            </div>
          </DialogActions>
        </Modal>
      </div>
    </div>
  );
}

export default MealsharingProject;
