import React from "react";
import Modal from "../modal.component";
import { DialogActions } from "@material-ui/core";
import ReactHooksCarousel from "react-hooks-carousel";
import ProjectsLink from "../projects-link-button.cmponent";

function WeatherProject() {
  return (
    <div className="weather-app">
      <div className="weather-link">
        <a
          href="https://sreelatha-vallabhaneni.github.io/Weather-App/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectsLink />
        </a>
        <Modal>
          <div className="modal-title">
            <h1>Weather App</h1>
          </div>
          <ReactHooksCarousel
            height="350px"
            width="550px"
            styleProp={{
              padding: "5px",
              background: "rgba(0,0,0,0.5)",
            }}
            pictures={[
              require("../../../images/weather/weather-image1.png"),
              require("../../../images/weather/weather-img2.png"),
              require("../../../images/weather/weather-image3.png"),
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
                <p>API</p>
              </span>
              <h3>Summary</h3>
              <p>
                Developed a Weather app with google Map, this application helps
                to know the current weather information at current city or any where in the world. Used REST API to fetch the weather data
              </p>
            </div>
          </DialogActions>
        </Modal>
      </div>
    </div>
  );
}

export default WeatherProject;
