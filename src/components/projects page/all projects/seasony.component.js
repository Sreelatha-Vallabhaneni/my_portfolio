import React from 'react';
import Modal from '../modal.component';
import { DialogActions } from "@material-ui/core";
import ReactHooksCarousel from "react-hooks-carousel";
import ProjectsLink from "../projects-link-button.cmponent";

function SeasonyProject(){
    return (
      <div className="final-project">
        <div className="fp-link">
          <a
            href="https://github.com/HackYourFuture-CPH/FP-class11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectsLink />
          </a>
          <Modal>
            <div className="modal-title">
              <h1>Dashboard App</h1>
              <p>
                For{" "}
                <span style={{ color: "rgba(250, 65, 126, 0.8)" }}>
                  Seasony
                </span>
              </p>
            </div>
            <ReactHooksCarousel
              height="350px"
              width="550px"
              styleProp={{
                padding: "5px",
                background: "rgba(0,0,0,0.5)",
              }}
              pictures={[
                require("../../../images/seasony/dashboard-image1.png"),
                require("../../../images/seasony/dashboard-image2.png"),
                require("../../../images/seasony/dashboard-image3.png"),
                require("../../../images/seasony/dashboard-image4.png"),
                require("../../../images/seasony/dashboard-image5.png"),
                require("../../../images/seasony/dashboard-image6.png"),
              ]}
            />
            <DialogActions>
              <div className="dialog-actions">
                <h3>Features</h3>
                <span>
                  <p>React</p>
                  <p>Hooks</p>
                  <p>Storybook</p>
                  <p>NodeJS</p>
                  <p>Express</p>
                  <p>KnexJS</p>
                  <p>MYSQL</p>
                  <p>Swagger</p>
                  <p>Firebase</p>
                  <p>Git</p>
                  <p>Github</p>
                  <p>Re-charts</p>
                </span>
                <h3>Summary</h3>
                <p>
                  Developed a dashboard app for{" "}
                  <a href="https://www.seasony.dk/" target="_blank" rel="noopener noreferrer">
                    <acronym title="Seasony">Seasony.dk</acronym>
                  </a>{" "}
                  - a startup specializing in vertical farming with robotics.
                  This application visualising sensor data from plants. We used
                  neomorphism design and Re-charts for data visualisation.
                </p>
              </div>
            </DialogActions>
          </Modal>
        </div>
      </div>
    );
}

export default SeasonyProject;