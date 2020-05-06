import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideNavBar from './components/navBar.component';
import Home from './components/home.component';
import About from './components/about.component';

function App() {  
  return (
    <Router>
      <div className="App">
        <SideNavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
