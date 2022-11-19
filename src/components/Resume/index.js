import React from "react";
//some stackoverflow code was used, in particular how to dsiplay an icon link in React N.T.S. resume 
function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-large">Adam's Resume</p>
        <hr />
        <a className="button is-primary" href={process.env.PUBLIC_URL + "/assets/Adam Gaboury Resume.pdf"} target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Programming Skills</p>
        <hr />
        <ul>
            <li>Javascript, HTML, CSS</li>
            <li>WebAPIs</li>
            <li>React, MongoDB, Express.js, Node.js</li>
            <li>Github, Heroku</li>
            <li>C#, C++, AutoCAD.NET, Revit.NET, Dynamo </li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;