import React, { useState } from "react";
import "./NavBar.css";

// import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
      console.log(window.scrollY);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // useEffect(() => {}, []);

  //Context para ver si esta scroll se pone active?
  //no me toma evento scroll, de ContextWrapper. x eso decidir
  //vale la pena el scroll effect ?

  return (
    <>
      {/* <nav className={"NavBar active"}> */}
      <nav className={navbar ? "NavBar active" : "NavBar"}>
        <section className="NavBar__Right__Options">
          <a href="#home" className="Option">
            <button className="navbar__item">Inicio</button>
          </a>
          <a href="#work" className="Option">
            <button className="navbar__item">Trabajos</button>
          </a>
          <a href="#about" className="Option">
            <button className="navbar__item">Sobre mí</button>
          </a>
          <a href="#contact" className="Option">
            <button className="navbar__item">Contacto</button>
          </a>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
