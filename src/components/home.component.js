import React from 'react';
import myImage from '../images/sreelatha.jpg';
export default function home(){
    return (
      <div>
        <span>
          <p>I'M Sreelatha Vallabhaneni</p>
          <p>A Full-Stack Web Developer.</p>
        </span>
        <img src={myImage} alt="sreelatha vallabhaneni"/>
      </div>
    );
};