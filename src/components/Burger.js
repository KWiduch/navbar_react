import React, { useState } from "react";
import "./Burger.css";

function Burger({ toggle, Toggling }) {
  return (
    <div onClick={Toggling} className="burger__container">
      <div
        className={`burger__line1 ${toggle ? "" : "burger__line1active"}`}
      ></div>
      <div
        className={`burger__line2 ${toggle ? "" : "burger__line2active"}`}
      ></div>
      <div
        className={`burger__line3 ${toggle ? "" : "burger__line3active"}`}
      ></div>

      <ul className={` burger__ul ${toggle ? "" : "burger__active"}`}>
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
          <a href="/Kontakt">Kontakt</a>
        </li>

        <li className="burger__FBIG">
          <a href="https://www.facebook.com/sikretskiteam">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
