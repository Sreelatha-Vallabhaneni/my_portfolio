import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { DialogActions } from '@material-ui/core';
import ReactHooksCarousel from "react-hooks-carousel";
import InfoModal from '../../infoModal';
//import {comments} from '../../../../images/winefamly/comments-slider.png'
//import {productDetails} from '../../../../images/winefamly/product-details.png'
//import {products} from '../../../../images/winefamly/products.png'

function wineFamly() {
  const link = "https://www.winefamly.com/";
  return (
    <div className="winefamly-project">
      <div className="winefamly-link">
      <InfoModal>
          <div className="modal-title">
            <h1>Winefamly</h1>
          </div>
          <div className='company'>
            <h3>Company:</h3>
            <p>Winefamly</p>
          </div>
          <div className='roles'>
            <h3>Role:</h3>
            <p>Frontend developer</p>
          </div>
          <DialogActions>
            <div className="dialog-actions">
              <h3>Tech stack</h3>
              <span>
                <p>React JS</p>
                <p>Javascript</p>
                <p>Webpack</p>
                <p>PHP</p>
                <p>Less CSS</p>
                <p>SCSS</p>
                <p>Magento</p>
                <p>MySQL</p>
                <p>Git</p>
                <p>etc...</p>
              </span>
              <h3>Summary</h3>
              <p>
                Developed E-commerce application for selling all kind of wines through the site,used Magento for creating Widgets. It's responsive for both mobile and desktop.
              </p><br/>
              <ReactHooksCarousel
                height="350px"
                width="550px"
                styleProp={{
                  padding: "5px",
                  background: "rgba(0,0,0,0.5)",
                }}
                pictures={[
                  require("../../../../images/winefamly/comments-slider.png"),
                  require("../../../../images/winefamly/product-details.png"),
                  require("../../../../images/winefamly/products.png"),
                ]}
              /><br/>
              <div className='respon'>
                <h3>Responsibilities:</h3>
                <ul className='respon-list'>
                    <li>Connected React JS to Magento 2, refactored some features(Add to cart, productList, Product Rate, Comments / Reviews, etc ...) by using React</li>
                    <li>Reduced bundle size to improve the spped, Added widgets in Magento admin, used Webpackage, NPM</li>
                    <li>As an Frontend intern fixed bugs, errors in existing features</li>
                    <li>Participated in Daily / weekly meetings (Fx: Daily-Task, Task Grooming, stand-up, company Info, etc ..)</li>
                    <li>Writing clean, maintainable & efficient code
                        and maintaining responsive and mobile-friendly web designs to ensure a
                        consistent user experience across different devices and screen sizes.
                    </li>
                    <li>Troubleshooting and debugging frontend issues.</li> 
                    <li>Collaborating and communicating with senior developers and designers</li>
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

export default wineFamly