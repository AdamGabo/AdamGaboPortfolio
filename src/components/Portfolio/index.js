import React from "react";
import Project from "../Project";

//content array for porjects, dont have time to fill out just yet would pass in a JSON like array to fill out my portfolio data, only showing my projects atm as they are the only fully operational web apps I have at the moment 

function Portfolio() {
    return (
      <div>
        <p className="content is-large">Portfolio</p>
        <hr />
        <Project/>
      </div>
    );
  }
  
  export default Portfolio;