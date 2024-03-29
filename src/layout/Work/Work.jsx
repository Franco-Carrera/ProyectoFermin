import "./Work.css";
import { Link } from "react-router-dom";
import work from "../../assets/image/image-work.svg";
import one from "../../assets/image/01.svg";
import { texts } from "../../layout/sectionsText/Home.texts.json";

const Work = () => {
  return (
    <>
      <section id="work" className="work sectionChange sectionChangeAnimation">
        <main>
          <div className="work__header">
            <picture className="work__picture">
              <img src={one} alt={texts.home.graphicAlt} />
            </picture>
            <h1>{texts.home.secondSection.titleWork}</h1>
          </div>

          <article className="work__text">
            <aside className="line-height">
              <p>{texts.home.secondSection.firstParrafo}</p>
              <p>{texts.home.secondSection.secondParrafo}</p>
              <p>{texts.home.secondSection.threeParrafo}</p>
              <p>{texts.home.secondSection.fourParrafo}</p>
              <Link className="link__button" to="/detail-work">
                <button className="button__home button__home--work__about">
                  {texts.home.button}
                </button>
              </Link>
            </aside>
          </article>
        </main>
        <picture className="work__picture --img__work">
          <img src={work} alt={texts.home.secondSection.imagenWork} />
        </picture>
      </section>
    </>
  );
};

export default Work;
