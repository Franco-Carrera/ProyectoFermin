import "./DetailGalery.css";
import first__image from "../../../assets/image/first__image__galery.webp";
import second__image from "../../../assets/image/second__image__galery.webp";
import three__image from "../../../assets/image/three__image__galery.webp";
import four__image from "../../../assets/image/four__image__galery.webp";
import five__image from "../../../assets/image/five__image__galery.webp";
import rectangle__galery from "../../../assets/image/RectangleDetailGalery.svg";
import frick__galery from "../../../assets/icons/flickrDetail.svg";
import { ReactSVG } from "react-svg";
import { texts } from "../data/Spaces.texts.json";
import circle__six from "../../../assets/image/Circle-6.svg";
import { FaBehance } from "react-icons/fa";

const DetailGalery = () => {
  return (
    <>
      <section className="detail__galery">
        <aside className="galery__text__top">
          <h1>{texts.Galery.title}</h1>
          <small>{texts.Galery.descriptionFirst}</small>
          <small>
            fotografía <strong>del tipo documental.</strong>He trabajado en
            <strong> recitales, obras de teatro</strong> y de más.
          </small>
        </aside>

        <section className="galery__types__fotography">
          <aside>
            <strong className="galery__type">{texts.Galery.themeOne}</strong>
            <strong className="galery__type">{texts.Galery.themeTwo}</strong>

            <strong className="galery__type">
              {texts.Galery.themeThree}
              <article className="type"></article>
            </strong>

            <strong className="galery__type">{texts.Galery.themeFour}</strong>
          </aside>
        </section>

        <main className="galery__photography__container">
          <ReactSVG
            src={rectangle__galery}
            alt={texts.GraphicRectangle}
            className="rectangle__galery"
          />

          <figure>
            <img src={first__image} alt={texts.Galery.FigureOne} />
          </figure>

          <figure>
            <img src={second__image} alt={texts.Galery.FigureTwo} />
          </figure>

          <figure className="figure__img__three">
            <img src={three__image} alt={texts.Galery.FigureThree} />
            {/* revisar html */}
          </figure>

          <figure>
            <img src={four__image} alt={texts.Galery.FigureOne} />
          </figure>

          <figure>
            <img src={five__image} alt={texts.Galery.FigureTwo} />
          </figure>
        </main>

        <footer>
          <aside className="galery__footer__invitation">
            <h3>{texts.Galery.invitationTitle}</h3>

            <article className="galery__icons__items">
              <li>
                <FaBehance
                  className="galery__behance__icon pointer"
                  alt={texts.Galery.behance}
                />
              </li>

              <li>
                <ReactSVG
                  src={frick__galery}
                  className="galery__flick__icon pointer"
                  alt={texts.Galery.flickr}
                />
              </li>
            </article>
          </aside>

          <ReactSVG
            src={circle__six}
            alt={texts.GraphicAltDetail}
            className="circle__six"
          />
        </footer>
      </section>
    </>
  );
};

export default DetailGalery;
