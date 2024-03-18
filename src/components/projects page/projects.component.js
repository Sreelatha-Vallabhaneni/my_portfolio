import React from "react";
import Olelynggaard from "./all projects/stroms/olelynggaard.component";
import Snabslanten from "./all projects/stroms/snabslanten.component";
import SeasonyProject from "./all projects/seasony.component";
import MealSharing from "./all projects/mealsharing.component";
import WeatherProject from "./all projects/weather.component";
import TodoProject from "./all projects/todo.component";
import SVshoesProject from "./all projects/svshoes.component";
import WineFamly from "./all projects/wineFamly/wineFamly.component"
import Fitness from "./all projects/fitness.component";

import "./projects.styles.css";

function Projects(){
    return (
        <div className="projects-container">
          <h1>My<span>Works</span></h1>
          {/* <div>
            <h3 className="company-title"><span>Company</span><div className="prjcts">Projects</div></h3>
            <div className="company-project-app">
              <Olelynggaard />
              <Snabslanten />
              <WineFamly />
            </div>
          </div>
          <div>
            <h3 className="HYF-title"><span>Practise</span><div className="prjcts">Projects</div></h3> */}
            <div className="project-app">
              <Olelynggaard />
              <Snabslanten />
              <WineFamly />
              <SeasonyProject />
              <Fitness />
              <MealSharing />
              <TodoProject/>
              <WeatherProject />
              <SVshoesProject/>
            </div>
        {/* </div> */}
      </div>
    );
}

export default Projects;
