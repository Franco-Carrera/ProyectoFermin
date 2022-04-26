import React from "react";
import "./Home.css";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo0 from "../../assets/image/LogoFermin0.svg";
import rectangle1 from "../../assets/image/Rectangle1.svg";
import rectangle2 from "../../assets/image/Rectangle2.svg";
import rectangle3 from "../../assets/image/Rectangle3.svg";
import logo1 from "../../assets/image/LogoFermin1.svg";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <section>
        <picture className="section__container">
          <img
            src={logo0}
            alt="image0"
            className="section__image__0"
            loading="lazy"
          />
        </picture>
      </section>

      <section className="main">
        <article className="main__row">
          <div className="main__col">
            <aside className="main__col__rectangles">
              <picture>
                <img src={rectangle1} alt="rectangle1" />
                <img src={rectangle2} alt="rectangle1" />
                <img src={rectangle3} alt="rectangle2" />
              </picture>
            </aside>

            <h1>Fermín Epele</h1>
            <section className="col__description">
              <h3>
                Diseñador en <br />
                comunicación visual
              </h3>
              <a href="/">
                <button type="submit">Ver trabajos</button>
              </a>
            </section>

            <article className="col__list__items">
              <li className="line__list__item one">
                <FaBehance />
              </li>
              <li className="line__list__item two">
                <FaWhatsapp />
              </li>
            </article>
          </div>

          <section className="container">
            <div className="content-all">
              <div className="content__image__1">
                <figure>
                  <img alt="image1" src={logo1} loading="lazy" />
                </figure>
              </div>
            </div>
          </section>
          {/* Usar new selectores*/}
        </article>

        {/* Article con logos de contacto */}
      </section>
    </Fragment>
  );
};

export default Home;
