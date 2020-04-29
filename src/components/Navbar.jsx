import React from "react";
import Upload from "./Upload";
import "../styles/navbar.css";
import _ from "lodash";
// import App from "./App";

export default function Navbar(prop) {
  // function changeProp(prop) {}

  return (
    <div className="navbar">
      <h1
        className="navbar-header"
        //dont change this, it's working
        onClick={prop.changeState}
      >
        Header
      </h1>
      <Upload />
    </div>
  );
}
{
  /*🇲🇽🤴🏼🤚🏼🍕*/
}
