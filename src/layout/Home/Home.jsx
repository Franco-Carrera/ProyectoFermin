import "./Home.css";
import { useState, useEffect, useContext } from "react";
import { ReactSVG } from "react-svg";
import { texts } from "../../layout/sectionsText/Home.texts.json";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo0 from "../../assets/image/LogoFermin0.svg";
import rectangle1 from "../../assets/image/Rectangle1.svg";
import rectangle2 from "../../assets/image/Rectangle2.svg";
import rectangle3 from "../../assets/image/Rectangle3.svg";
import logo1 from "../../assets/image/LogoFermin1.svg";
import NavBar from "../NavBar/NavBar";
import Work from "../Work/Work";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { Context } from "../../utils/Context";

const Home = () => {
  const { offSetY } = useContext(Context);

  return (
    <>
      <main className="slides">
        <NavBar />

        {/* <main className="main__principal"> */}
        <section className="slide">
          <ReactSVG src={logo0} alt="logo0" className="image__0" />
          <main className="slide-container">
            <section
              // className={!offSetY ? "main" : "main animate"}
              id="home"
              className="main"

              // style={{ transform: `translate3d(0px, -${offSetY * 1.5}px, 0px)` }}
            >
              <main
                className="main__col Parallax__content"
                style={{ transform: `translateX(-${offSetY * 0.5}px)` }}
              >
                <aside className="main__col__rectangles">
                  <ReactSVG
                    src={rectangle1}
                    className="rectangle__one"
                    alt={texts.home.firstSection.rectangle}
                  />
                  <ReactSVG
                    src={rectangle2}
                    className="rectangle__two"
                    alt={texts.home.firstSection.rectangleTwo}
                  />
                  <ReactSVG
                    src={rectangle3}
                    className="rectangle__three"
                    alt={texts.home.firstSection.rectangleThree}
                  />
                </aside>

                {/* {target ? ( */}
                <article
                  className="main__col__info lax"
                  // style={{ transform: `translateX(-${offSetY * 0.5}px)` }}
                >
                  <h1>
                    <span
                      className=" Parallax__content"
                      style={{ transform: `translateX(-${offSetY * 0.5}px)` }}
                    >
                      {texts.home.firstSection.sloganFirstName}
                    </span>

                    <span> {texts.home.firstSection.sloganLastName}</span>
                  </h1>
                  <section className="col__description">
                    {/* --- */}
                    <h3>
                      <span>{texts.home.firstSection.subSlogan}</span>
                      <span>{texts.home.firstSection.subSloganTwo}</span>
                    </h3>

                    <Link to="/detail-work">
                      <button className="button__home" type="submit">
                        {texts.home.firstSection.button}
                      </button>
                      {/* check en que caso va submit */}
                    </Link>
                  </section>
                </article>
                {/* ) : (
            console.log("not exist target")
          )} */}

                <ul className="col__list__items">
                  <li className="line__list__item one">
                    <a href="https://www.behance.net/FERMIN05" target="__blank">
                      <FaBehance />
                    </a>
                  </li>
                  <li className="line__list__item two">
                    <FaWhatsapp />
                  </li>
                </ul>
              </main>

              <ReactSVG
                src={logo1}
                alt={texts.home.graphicAlt}
                className="logo__graphic Parallax__content"
                // style={{ transform: `translateX(-${offSetY * 0.5}px)` }}
              />
              {/*new selectores*/}
            </section>
          </main>
        </section>

        <Work />

        <About />
        <Contact />
      </main>
      {/* </main> */}
    </>
  );
};

export default Home;
