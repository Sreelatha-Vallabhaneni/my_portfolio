import React from 'react';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/themes";
import Toggle from "./components/toggler";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

//import SideNavBar from './components/side navbar/navBar.component';
import SideNavBar from "./components/side navbar/burgerMenu.component";
import Home from './components/home page/home.component';
import About from './components/about page/about.component';
import Skills from './components/skills page/skills.component';
import Projects from './components/projects page/projects.component';
import Contact from './components/contact page/contact.component';

function App() {  
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) return <div />;
  return (
    <ThemeProvider theme={themeMode} values={{toggleTheme, theme}}>
      <>
        <GlobalStyles />
        <div className="App">
          <Router>
            <SideNavBar />
            <Toggle theme={theme} toggleTheme={toggleTheme}/>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/skills" component={Skills}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
