import React from "react";
import "./civlizationlanding.css";

export default function CivlizationLanding() {
  return (
    <div className="outersplash">
      <div className="splash">
        <div className="splashcontainer">
          <h1 className="splashtitle">Civilopedia VI</h1>
        </div>
        <div className="linkContainer">
          <a href={"/list"} className="listLink">
            View our breakdowns here
          </a>
        </div>
      </div>
    </div>
  );
}
