import "./DetailHabilities.css";
import { ReactSVG } from "react-svg";
import circle__five from "../../../assets/image/Circle-5.svg";
import adobe__photo from "../../../assets/icons/adobePhDetail.svg";
import adobe__illu from "../../../assets/icons/adobeIlluDetail.svg";

const DetailHabilities = () => {
  return (
    <>
      {/* DetailHabilities */}
      <main className="main__habilities">
        <ReactSVG src={circle__five} />

        <article className="article__skills__habilities">
          <h1>Habilidades</h1>

          <aside className="list__skills__habilities">
            <div className="item__list__skill">
              <ReactSVG src={adobe__photo} alt="" />
              <span>Adobe Photoshop</span>
            </div>

            <ReactSVG src={adobe__illu} alt="" />
          </aside>
        </article>
      </main>
    </>
  );
};

export default DetailHabilities;
