import "./About.css";
import circleTwo from "../../assets/image/Circle-2.svg";
import imageFermin from "../../assets/image/foto-fermin.webp";
import two from "../../assets/image/02.svg";
import { ReactSVG } from "react-svg";
import { texts } from "../../layout/sectionsText/Home.texts.json";

const About = () => {
  return (
    <>
      <section className="slide">
        <section id="about" className="about">
          <article>
            <aside className="about__col__circle__and__img">
              <ReactSVG
                src={circleTwo}
                className="circle__two"
                alt={texts.home.graphicAlt}
              />

              <div className="about__col__box__img">
                <img
                  src={imageFermin}
                  alt={texts.home.thirdSection.imageFermin}
                  className="about__img"
                />
                <div className="backdrop-filter"></div>
              </div>

              <aside className="about__col__02__and__text">
                <section className="about__col__02">
                  <ReactSVG
                    src={two}
                    className="__02"
                    alt={texts.home.thirdSection.graphic02}
                  />
                  <h1 className="about__col__text__title">
                    {texts.home.thirdSection.titleAbout}
                  </h1>
                </section>

                <section className="about__contain">
                  <p>{texts.home.thirdSection.descriptionAbout}</p>
                  <aside className="text-center contain__button__home">
                    <button className="button__home button__home--work__about text-align">
                      Ver más
                    </button>
                  </aside>
                </section>
              </aside>
            </aside>
          </article>
        </section>
      </section>
    </>
  );
};

export default About;
