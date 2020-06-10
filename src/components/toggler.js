// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return isLight ? (    
    <button onClick={toggleTheme} className="moon">
      <FontAwesomeIcon className="icon-moon" icon={faMoon} />
    </button>
  ) : (
    <button onClick={toggleTheme} className="sun">
      <FontAwesomeIcon className="icon-sun" icon={faSun} />
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;