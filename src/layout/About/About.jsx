import "./About.css";
import React from "react";
import circleTwo from "../../assets/image/Circle-2.svg";
import imageFermin from "../../assets/image/foto-fermin.jpg";
import two from "../../assets/image/02.svg";
import { ReactSVG } from "react-svg";

const About = () => {
  return (
    <>
      <section className="about">
        {/* <article> */}
        <ReactSVG
          src={circleTwo}
          alt="jsonalt.logo1"
          className="logo-graphic-two"
        />

        <picture>
          <img src={imageFermin} alt="" className="image__fermin" />
        </picture>
        {/* </article> */}

        <article className="text">
          <aside className="text__top">
            <picture>
              <img src={two} alt="" className="image__02" />
            </picture>
            <h2>Sobre mi</h2>
          </aside>

          <div>
            <p>
              ¡Hola! Mi nombre es Fermín y soy diseñador en comunicación visual,
              fotógrafo y especialista en comunicación digital y redes.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
