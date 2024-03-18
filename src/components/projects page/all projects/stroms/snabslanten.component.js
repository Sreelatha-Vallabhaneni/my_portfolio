import React from 'react'
import ProjectsLink from '../../projects-link-button.cmponent'
import { DialogActions, Modal } from '@material-ui/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import InfoModal from '../../infoModal';

function snabslanten() {
  const link = "https://snabslanten.dk/";
  return (
    <div className="snabslanten-project">
      <div className="snabslanten-link">
        <InfoModal>
          <div className="modal-title">
            <h1>Snabslanten</h1>
          </div>
          <div className='company'>
            <h3>Company:</h3>
            <p>Strømworks</p>
          </div>
          <div className='roles'>
            <h3>Role:</h3>
            <p>Frontend developer</p>
          </div>
          <DialogActions>
            <div className="dialog-actions">
              <h3>Tech stack</h3>
              <span>
                <p>Laravel blade</p>
                <p>Javascript</p>
                <p>PHP</p>
                <p>Tailwind CSS</p>
                <p>MySQL</p>
                <p>Git</p>
                <p>etc...</p>
              </span>
              <h3>Summary</h3>
              <p>
                Snabslanten is Copenhagen Municipality's cultural pool for young people. The pool supports self-established youth culture in the form of cultural activities, events and projects that are rooted in Copenhagen Municipality.<br/><br/>
                Developed for creating application forms for users, used laravel blade and tailwind CSS,<br/>
                User: 'Create' and 'Edit' application.<br/>
                Admin: 'View' and 'Edit' application.<br/>
                Super admin:'View', 'Edit', 'Update', and download files.
              </p>
              <div className='respon'>
                <h3>Responsibilities:</h3>
                <ul className='respon-list'>
                    <li>Designing and developing user interfaces</li>
                    <li>Writing clean, maintainable & efficient code
                        and maintaining responsive and mobile-friendly web designs to ensure a
                        consistent user experience across different devices and screen sizes.
                    </li>
                    <li>Troubleshooting and debugging frontend issues.</li>
                    <li>Attending to standup calls and discussing day-to-day tasks, maintaining
                        deadlines, Continuous delivery.
                    </li>
                    <li>Collaborating and communicating with CTO, other developers, project
                        managers, and designers
                    </li>
                    <li>creating scalable applications and optimizing the
                        app's performance.
                    </li>
                    <li>Using version control (Git) to track changes, creating pull-requests and
                        participating in code reviews.
                    </li>
                </ul>
              </div>
            </div>
          </DialogActions>
        </InfoModal>
        {/* <a
          href="https://hyf-meal-sharing-project.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectsLink />
        </a> */}
        <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer" 
        >
            <button className="btn-icons">
                <FontAwesomeIcon className="icon eye" icon={faEye} />
            </button>
        </a>
      </div>
    </div>
  )
}

export default snabslanten