import React from "react";

//map the tabs on the nav bar using tabs.map, utilizes some Stack Overflow code for the li classname, <a> href and ? line 11 
function NavFunc(props) {
  const tabStrings = ["About", "Portfolio", "Resume", "Contact"];
  return (
    <div className="tabs is-centered">
      <ul className="nav nav-tabStrings">
        {tabStrings.map((t) => (
          <li className={props.activePage === t ? "nav-item is-active" : "nav-item"} key={t}>
            <a href={"#" + t.toLowerCase()} onClick={() => props.pageHandler(t)} className={props.activePage === t ? "nav-link active" : "nav-link"}>{t}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavFunc;