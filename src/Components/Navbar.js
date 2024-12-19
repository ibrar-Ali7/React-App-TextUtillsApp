import { prototype } from "events";
import { title } from "process";
import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Navigation
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
<div className={`form-check form-switch text-${props.mode==='dark' ? 'light' : 'dark'}`} >
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Switch Dark Mode</label>
</div>
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.number,
};
Navbar.defaultProps = {
  title: "Default Title",
  about: "Default About",
  button: "SUBMIT",
};
