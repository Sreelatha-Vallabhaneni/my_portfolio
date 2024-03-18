import { DialogActions, Modal } from '@material-ui/core'
import React from 'react'
import ProjectsLink from '../../projects-link-button.cmponent'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import InfoModal from '../../infoModal';

function olelynggaard() {
    const link="https://www.olelynggaard.com/";
  return (
    <div className="ole-project">
      <div className="ole-link">
        <InfoModal>
            <div className="modal-title">
                <h1>Olelynggaard</h1>
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
                    <p>NextJS</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>Tailwind CSS</p>
                    <p>Javascript</p>
                    <p>Typescript</p>
                    <p>Graphql</p>
                    <p>Craft CMS</p>
                    <p>Framer motion</p>
                    <p>Splide JS</p>
                    <p>MySQL</p>
                    <p>Docker</p>
                    <p>Vercel</p>
                    <p>Git</p>
                    <p>NodeJS</p>
                    <p>Centra</p>
                    <p>Hooks</p>
                </span>
                <h3>Summary</h3>
                <p>
                    Developed an e-commerce based application as a progressive web app within the browser for both mobile and desktop.
                </p>
                <div className='respon'>
                    <h3>Responsibilities:</h3>
                    <ul className='respon-list'>
                        <li>Designing and developing user interfaces</li>
                        <li>Creating reusable components. Writing clean, maintainable & efficient code
                            and maintaining responsive and mobile-friendly web designs to ensure a
                            consistent user experience across different devices and screen sizes.
                        </li>
                        <li>Troubleshooting and debugging frontend issues.</li>
                        <li>Attending to standup calls and discussing day-to-day tasks, maintaining
                            deadlines, working under agile methodologies and Continuous delivery.
                        </li>
                        <li>Collaborating and communicating with CTO, other developers, project
                            managers, and designers
                        </li>
                        <li>Refactoring components, creating scalable applications and optimizing the
                            app's performance.
                        </li>
                        <li>Using version control (Git) to track changes, creating pull-requests and
                            participating in code reviews.
                        </li>
                        <li>Using REST API for data fetching and creating modules by using headless CMS
                            (craft CMS), importing module data through Graphql query.
                        </li>
                    </ul>

                </div>
                </div>
            </DialogActions>
        </InfoModal>
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

export default olelynggaard