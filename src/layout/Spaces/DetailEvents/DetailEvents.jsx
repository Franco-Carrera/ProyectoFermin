import React from "react"; //
import "./DetailEvents.css";
import { ReactSVG } from "react-svg";
import RectangleDetail from "../../../assets/image/Frame25.svg";
import pictureOne from "../../../assets/image/detail__picture__one.jpg";
import picture__two from "../../../assets/image/detail__picture__two.jpg";
import picture__three from "../../../assets/image/detail__picture__three.jpg";
import picture__four from "../../../assets/image/detail__picture__four.jpg";

//Idea de pasar imgs and logos a public.

const DetailEvents = () => {
  return (
    <>
      <section className="section detail__events">
        <ReactSVG src={RectangleDetail} className="rectangle__detail" />
        {/* Galería flex o grid? */}

        <section className="detail__events container">
          <aside>
            <section className="detail__events row__wrap">
              <picture>
                <img src={pictureOne} alt="" />
              </picture>

              <picture>
                <img src={picture__two} alt="" />
              </picture>
            </section>

            {/* quedaria lograr grow aquí */}
            <picture className="wrap__picture">
              <img src={picture__four} alt="" className="picture__four" />
            </picture>
          </aside>

          <picture className="row__three__picture">
            <img src={picture__three} alt="" className="picture__three" />
          </picture>
        </section>
      </section>
    </>
  );
};

export default DetailEvents;

/**Idea de que sea todo esto un solo componente* */
/**colocar alts */
/**y mobile? */
