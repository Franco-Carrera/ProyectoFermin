import React from "react";
import "./Home.css";
import { ReactSVG } from "react-svg";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo0 from "../../assets/image/LogoFermin0.svg";
import rectangle1 from "../../assets/image/Rectangle1.svg";
import rectangle2 from "../../assets/image/Rectangle2.svg";
import rectangle3 from "../../assets/image/Rectangle3.svg";
import logo1 from "../../assets/image/LogoFermin1.svg";

const Home = () => {
  return (
    <>
      <section className="main">
        <ReactSVG src={logo0} alt="logo0" className="image__0" />
        <main className="main__col">
          {/*  */}

          <aside className="main__col__rectangles">
            <ReactSVG
              src={rectangle1}
              alt="rectangle1"
              className="rectangle__one"
            />
            <ReactSVG
              src={rectangle2}
              alt="rectangle1"
              className="rectangle__two"
            />
            <ReactSVG
              src={rectangle3}
              alt="rectangle2"
              className="rectangle__three"
            />
          </aside>

          <article className="main__col__info">
            <h1>
              Fermín <br /> Epele
            </h1>
            <section className="col__description">
              {/* --- */}
              <h3>
                Diseñador en <br />
                comunicación visual
              </h3>
              <a href="/">
                <button type="submit">Ver trabajos</button>
              </a>
            </section>
          </article>

          <article className="col__list__items">
            <li className="line__list__item one">
              <FaBehance />
            </li>
            <li className="line__list__item two">
              <FaWhatsapp />
            </li>
          </article>
        </main>

        <ReactSVG src={logo1} alt="jsonalt.logo1" className="logo-graphic" />
        {/*new selectores*/}
      </section>
    </>
  );
};

export default Home;
