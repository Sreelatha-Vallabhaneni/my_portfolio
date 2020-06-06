import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import './projects.styles.css';

function ProjectsLink(){
    return (
      <button className="btn-icons">
          <FontAwesomeIcon className="icon link" icon={faLink} />
      </button>
    );
}

export default ProjectsLink;