//import react 
import React from "react"; 
//N.T.S. will need to save my photo to an image folder 
function AboutFunc() {
    return (
        //HTML  
      <div>
        <p className="content">CAD Programmer/MERN Full Stack Programmer</p>
        <img className="profile-pic" src={process.env.PUBLIC_URL + '/img/myphoto.jpg'} alt="Adam Gaboury"/>
        <p className="content">
          Hi im Adam im a CAD Programmer.
        </p>
        <p className="about-content">
          I like to code in C#, C++, JS, React, MySql, MongoDB etc. 
        </p>
      </div>
    );
  }
  
  export default AboutFunc;