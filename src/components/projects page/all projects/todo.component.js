import React from "react";
import Modal from "../modal.component";
import { DialogActions } from "@material-ui/core";
import ReactHooksCarousel from "react-hooks-carousel";
import ProjectsLink from "../projects-link-button.cmponent";

function TodoProject() {
  return (
    <div className="todo-app">
      <div className="todo-link">
        <a
          href="https://sreelatha-todoapp.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectsLink />
        </a>
        <Modal>
          <div className="modal-title">
            <h1>Todo App</h1>
          </div>
          <ReactHooksCarousel
            height="350px"
            width="550px"
            styleProp={{
              padding: "5px",
              background: "rgba(0,0,0,0.5)",
            }}
            pictures={[
              require("../../../images/todo/todo1.png"),
              require("../../../images/todo/todo2.png"),
            ]}
          />
          <DialogActions>
            <div className="dialog-actions">
              <h3>Features</h3>
              <span>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>React</p>
                <p>JavaScript</p>
                <p>Bootstrap</p>
                <p>Git</p>
                <p>Github</p>
                <p>Netlify</p>
              </span>
              <h3>Summary</h3>
              <p>
                Developed a Todo app using react hooks with timer setup,and used Netlify for deployment.
              </p>
            </div>
          </DialogActions>
        </Modal>
      </div>
    </div>
  );
}

export default TodoProject;
