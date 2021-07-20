import React from "react";
import "./navbar.css";

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav
      className="navbar  px-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <span className="icon-text">
            <span className="icon">
              <ion-icon name="home-sharp"></ion-icon>
            </span>
            <span>Home</span>
          </span>
        </a>

        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu  ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-brand navbar-end">
          <a href="/list" className="navbar-item">
            <span className="icon-text">
              <span className="icon">
                <ion-icon name="document-text-outline"></ion-icon>
              </span>
              <span>List</span>
            </span>
          </a>
        </div>
        <div className="navbar-brand navbar-end">
          <a href="/create" className="navbar-item">
            <span className="icon-text">
              <span className="icon">
                <ion-icon name="create-outline"></ion-icon>
              </span>
              <span>New Civ</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
