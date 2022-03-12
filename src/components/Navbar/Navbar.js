import React, { useState } from "react";
import Navigation from "./styles/navbar.styles";

export function Navbar(props) {
  const [active, setActive] = useState("nav-menu");

  const navToggle = () => {
    return active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
  };
  return (
    <>
      <Navigation>
        <div className="logo">Rohit Sharma</div>
        <ul className={active}>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <button
          value="Click"
          className="nav__toggler"
          onClick={() => navToggle()}
        >
          Button
        </button>
      </Navigation>
    </>
  );
}

export default Navbar;
