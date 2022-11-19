//import all this stuff
import React, { useState } from 'react';
import Navigation from "../Nav";
import Contact from "../ContactForm";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import About from "../About";

//pass up a level to App.js? 
function HeaderFunc() { //Hook with switch statement to get items to load correctly 
    const [activePage, pageHandler] = useState("AboutFunc");
  
    const pageRender = () => {
      switch (activePage) {
        case "About":
          return <About />;
        case "Portfolio":
          return <Portfolio />;
        case "Contact":
          return <Contact />;
        case "Resume":
          return <Resume />;
        default:
          return <About />;
      }
    };
    //typical HTML navbar 
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-div">
            <a className="navbar-item" rel="noreferrer" target="_blank" href="https://github.com/AdamGabo?tab=repositories">
              <span className="content is-large">Adam Gaboury</span>
            </a>
          </div>
        </nav>
        {}
        <Navigation activePage={activePage} pageHandler={pageHandler}/>
        {}
        <main>
          <div>{pageRender(activePage)}</div>
        </main>
      </div>
    );
  }
  
  export default HeaderFunc;