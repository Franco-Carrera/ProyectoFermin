// import React, { useContext } from "react";
import "./Home.css";
import { ReactSVG } from "react-svg";
// import { Context } from "../../utils/Context";
import { texts } from "./Home.texts.json";
import NavBar from "../NavBar/NavBar";
import Work from "../Work/Work";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo0 from "../../assets/image/LogoFermin0.svg";
import rectangle1 from "../../assets/image/Rectangle1.svg";
import rectangle2 from "../../assets/image/Rectangle2.svg";
import rectangle3 from "../../assets/image/Rectangle3.svg";
import logo1 from "../../assets/image/LogoFermin1.svg";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  // const { language } = useContext(Context);

  return (
    <>
      <NavBar />

      <section className="main" id="home">
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
              <span> {texts.es.sloganFirstName}</span>
              <span> {texts.es.sloganLastName}</span>

              {/* white-space aplicar + yarn */}
            </h1>
            <section className="col__description">
              {/* --- */}
              <h3>
                <span>{texts.es.subSlogan}</span>
                <span>{texts.es.subSloganTwo}</span>
              </h3>

              <Link to="/detail-work">
                <button type="submit">Ver trabajos</button>
                {/* check en que caso va submit */}
              </Link>
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

        <ReactSVG
          src={logo1}
          alt={texts.es.graphicAlt}
          className="logo-graphic"
        />
        {/*new selectores*/}
      </section>

      <Work />
      <About />
      <Contact />
    </>
  );
};

export default Home;
