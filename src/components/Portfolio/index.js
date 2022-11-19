import React from "react";
import Project from "../Projects";

//content array for porjects, dont have time to fill out just yet would pass in a JSON like array to fill out my portfolio data 
const myProjects = []; 
function PortFunc() {
    return (
      <div>
        <p className="content is-large">Portfolio</p>
        <hr />
        <Project projects={myProjects} />
      </div>
    );
  }
  
  export default PortFunc;