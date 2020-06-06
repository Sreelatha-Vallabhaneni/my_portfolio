import React from "react";
import Modal from "../modal.component";
import { DialogActions } from "@material-ui/core";
import ReactHooksCarousel from "react-hooks-carousel";
import ProjectsLink from "../projects-link-button.cmponent";

function SVshoesProject() {
  return (
    <div className="SV-project">
      <div className="SV-link">
        <a
          href="https://sreelatha-vallabhaneni.github.io/e-commerce-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectsLink />
        </a>
        <Modal>
          <div className="modal-title">
            <h1>e-commerce App</h1>
          </div>
          <ReactHooksCarousel
            height="350px"
            width="550px"
            styleProp={{
              padding: "5px",
              background: "rgba(0,0,0,0.5)",
            }}
            pictures={[
              require("../../../images/e-commerce/SVshoes1.png"),
              require("../../../images/e-commerce/SVshoes2.png"),
              require("../../../images/e-commerce/SVshoes3.png"),
              require("../../../images/e-commerce/SVshoes4.png"),
              require("../../../images/e-commerce/SVshoes5.png"),
              require("../../../images/e-commerce/SVshoes6.png"),
            ]}
          />
          <DialogActions>
            <div className="dialog-actions">
              <h3>Features</h3>
              <span>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>Git</p>
                <p>Github</p>
              </span>
              <h3>Summary</h3>
              <p>
                Developed a e-comerce application with modal window, this app is user friendly and responsive.
              </p>
            </div>
          </DialogActions>
        </Modal>
      </div>
    </div>
  );
}

export default SVshoesProject;
