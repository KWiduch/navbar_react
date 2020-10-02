import React, { useState } from "react";
import "./Navbar.css";
import Burger from "./Burger";

function Navbar() {
  const [toggle, setToggle] = useState("false");
  const Toggling = (e) => {
    // console.log(e.target);
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className={`header ${toggle ? "" : "header__active"}`}>
      <h1 className="header__name">
        <a href="/">Sikret Ski Team</a>
      </h1>
      <ul className="header__ul1">
        <li>
          <a href="/">Start</a>
        </li>
        <li>
          <a href="#">Galeria</a>
        </li>
        <li>
          <a href="#">Wyjazdy</a>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
      </ul>

      <ul className="header__ul2">
        <li>
          <a href="https://www.facebook.com/sikretskiteam">
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <Burger toggle={toggle} Toggling={Toggling} />
    </div>
  );
}

export default Navbar;
