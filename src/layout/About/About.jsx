import "./About.css";
import React from "react";
import circleTwo from "../../assets/image/Circle-2.svg";
import imageFermin from "../../assets/image/foto-fermin.jpg";
import two from "../../assets/image/02.svg";
import { ReactSVG } from "react-svg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <article>
          {/* <section> */}
          <aside className="about__col__circle__and__img">
            <ReactSVG src={circleTwo} className="circle__two" />

            <div className="caja">
              <img src={imageFermin} alt="ImageFermin" className="image__02" />
              <div className="backdrop-filter"></div>
            </div>

            <aside className="about__col__02__and__text">
              <section className="about__col__02">
                <ReactSVG src={two} className="__02" />
                <h1 className="about__col__02__and__text__title">Sobre mi</h1>
              </section>

              <section className="about__contain">
                <p>
                  ¡Hola! Mi nombre es Fermín y soy diseñador en {/*<br />*/}
                  comunicación visual, fotógrafo y especialista en {/* <br />*/}
                  comunicación digital y redes.
                </p>
                <aside className="text-center contain__button__home">
                  <button className="button__home">Ver más</button>
                </aside>
              </section>
            </aside>
          </aside>
          {/* </section> */}
        </article>
      </section>
    </>
  );
};

/***F9F9F9
 *
 * * */

export default About;
