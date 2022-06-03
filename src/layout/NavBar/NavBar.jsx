import React, { useState } from "react";
import "./NavBar.css";
//import { NavLink } from "react-router-dom";
//import line0 from "../../assets/image/line0.svg";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // useEffect(() => {}, []);

  return (
    <>
      <header className="header">
        <section className="container">
          <nav className={navbar ? "NavBar active" : "NavBar"}>
            <section className="NavBar__Right__Options">
              <a href="/home" className="Option">
                <button className="navbar__item">Inicio</button>
              </a>
              <a href="/works" className="Option">
                <button className="navbar__item"> Trabajos</button>
              </a>
              <a href="/about" className="Option">
                <button className="navbar__item">Sobre mí</button>
              </a>
              <a href="/contact" className="Option">
                <button className="navbar__item">Contacto</button>
              </a>
            </section>

            {/* Idea navOptionsRight */}
            {/* <article className="Nav__line">
          <img src={line0} alt="line0" />
          <li className="line__list__item one">
            <FaBehance />
          </li>
          <li className="line__list__item two">
            <FaWhatsapp />
          </li>
        </article> */}
            {/* idea onChange */}
          </nav>
        </section>
      </header>
    </>
  );
};

export default NavBar;
