import "./DetailEvents.css";
import { ReactSVG } from "react-svg";
import { texts } from "../data/Spaces.texts.json";
import RectangleDetail from "../../../assets/image/RectangleDetailEvents.svg";
import pictureOne from "../../../assets/image/detail__picture__one.webp";
import picture__two from "../../../assets/image/detail__picture__two.webp";
import picture__three from "../../../assets/image/detail__picture__three.webp";
import picture__four from "../../../assets/image/detail__picture__four.webp";

const DetailEvents = () => {
  return (
    <>
      <section className="section detail__events sectionChangeStart">
        <ReactSVG src={RectangleDetail} className="rectangle__detail" />

        <article className="detail__events container">
          <main>
            <section className="detail__events row__wrap">
              <aside className="detail__container__picture">
                <picture>
                  <img src={pictureOne} alt={texts.Events.imageEventOne} />
                  <div className="backdrop-filter --detail"></div>
                </picture>
              </aside>

              <aside className="detail__container__picture">
                <picture>
                  <img src={picture__two} alt={texts.Events.imageEventTwo} />
                  <div className="backdrop-filter --detail"></div>
                </picture>
              </aside>
            </section>

            <aside className="detail__container__picture --reset sectionChangeStart">
              <picture className="wrap__picture">
                <img
                  src={picture__four}
                  alt={texts.Events.imageEventFour}
                  className="picture__four"
                />
                <div className="backdrop-filter --detail"></div>
              </picture>
            </aside>
          </main>

          <aside className="detail__container__picture__four">
            <picture className="row__three__picture">
              <img
                src={picture__three}
                alt={texts.Events.imageEventThree}
                className="picture__three"
              />
              <div className="backdrop-filter --detail"></div>
            </picture>
          </aside>
        </article>
      </section>
    </>
  );
};

export default DetailEvents;
