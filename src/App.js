import React from 'react';
import './App.css';
import SideNavBar from './components/navBar.component';
import Home from './components/home.component';

function App() {
  return (
    <div className="App">
      <SideNavBar/>
      <Home/>
    </div>
  );
}

export default App;
