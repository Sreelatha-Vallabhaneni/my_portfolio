import React from 'react';
import { useHistory } from "react-router-dom";
//import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faFile, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import './navBar.styles.css';

function SideNav(){
  let history = useHistory();
    return (
      <aside>
        <div className="navbar-container">
          <span className="nav-txt">
            <p>Sreelatha</p>
            <p>Vallabhaneni</p>
          </span>
          <button className="nav-btn" onClick={() => history.push("/")}>
            <FontAwesomeIcon className="icon-title" icon={faHome} />
            Home
          </button>
          <button className="nav-btn" onClick={() => history.push("/about")}>
            <FontAwesomeIcon className="icon-title" icon={faUser} />
            About
          </button>
          <button className="nav-btn" onClick={() => history.push("/skills")}>
            <FontAwesomeIcon className="icon-title" icon={faFile} />
            Skills
          </button>
          <button className="nav-btn" onClick={() => history.push("/projects")}>
            <FontAwesomeIcon className="icon-title" icon={faWindowRestore} />
            Projects
          </button>
          <button className="nav-btn" onClick={() => history.push("/contact")}>
            <FontAwesomeIcon className="icon-title" icon={faEnvelope} />
            Contact
          </button>
        </div>
      </aside>
    );
}

// export default withRouter(SideNav);
export default SideNav;