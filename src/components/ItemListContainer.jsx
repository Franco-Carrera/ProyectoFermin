import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getData } from "../utils/firebaseConfig";
import { useParams } from "react-router-dom";

import NavBar from "../layout/NavBar/NavBar";
import { ReactSVG } from "react-svg";
import { texts } from "../layout/sectionsText/Home.texts.json";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo0 from "../assets/image/LogoFermin0.svg";
import rectangle1 from "../assets/image/Rectangle1.svg";
import rectangle2 from "../assets/image/Rectangle2.svg";
import rectangle3 from "../assets/image/Rectangle3.svg";
import logo1 from "../assets/image/LogoFermin1.svg";
// import Home from "../layout/Home/Home";

import Work from "../layout/Work/Work";
import rectangle__galery from "../assets/image/RectangleDetailGalery.svg";

const ItemListContainer = () => {
  const { categoryid } = useParams();
  const [data, setData] = useState([]);
  //const [subcategories, setSubCategories] = useState([]);

  useEffect(() => {
    getData("category", "==", categoryid)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("Error searching items", err);
      });
  }, [categoryid]);

  return (
    <>
      <NavBar />

      <ReactSVG src={logo0} alt="logo0" className="image__0" />
      <section id="home" className="main sectionChangeStart">
        <main
          className="main__col Parallax__content"
          // style={{ transform: `translateX(-${offSetY * 0.5}px)` }}
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

          <article className="main__col__info lax">
            <h1>
              <span
                className=" Parallax__content"
                // style={{ transform: `translateX(-${offSetY * 0.5}px)` }}
              >
                {texts.home.firstSection.sloganFirstName}
              </span>

              <span> {texts.home.firstSection.sloganLastName}</span>
            </h1>
            <section className="col__description">
              <h3>
                <span>{texts.home.firstSection.subSlogan}</span>
                <span>{texts.home.firstSection.subSloganTwo}</span>
              </h3>

              <Link to="/detail-work">
                <button className="button__home" type="submit">
                  {texts.home.firstSection.button}
                </button>
              </Link>
            </section>
          </article>

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
        />
      </section>
      {/* <Home /> */}

      {/* Work */}
      <Work />

      <main className="galery__photography__container galery__works__main sectionChangeStart">
        <ReactSVG
          src={rectangle__galery}
          alt={texts.GraphicRectangle}
          className="rectangle__galery"
        />

        <ItemList data={data} />
        {/* {
  
} */}
      </main>

      {/* podríamos poner también About y Contact */}
    </>
  );
};

export default ItemListContainer;
