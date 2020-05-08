import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideNavBar from './components/navBar.component';
import Home from './components/home page/home.component';
import About from './components/about page/about.component';
import Resume from './components/resume page/resume.component';
import Projects from './components/projects page/projects.component';
import Contact from './components/contact page/contact.component';

function App() {  
  return (
    <Router>
      <div className="App new">
        <SideNavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
