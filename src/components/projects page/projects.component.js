import React from "react";
import SeasonyProject from "./all projects/seasony.component";
import MealSharing from "./all projects/mealsharing.component";
import WeatherProject from "./all projects/weather.component";
import TodoProject from "./all projects/todo.component";
import SVshoesProject from "./all projects/svshoes.component";

import "./projects.styles.css";

function Projects(){
    return (
      <section>
        <div className="projects-container">
          <h1>My<span>Works</span></h1>
          <div className="project-app">
            <SeasonyProject />
            <MealSharing />
            <TodoProject/>
            <WeatherProject />
            <SVshoesProject/>
          </div>
        </div>
      </section>
    );
}

export default Projects;
