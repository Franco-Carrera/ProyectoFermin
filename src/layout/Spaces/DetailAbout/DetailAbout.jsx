import React from "react";
import backIcon from "../../../assets/icons/Vector.svg";
import two from "../../../assets/icons/02about.svg";
import Group from "../../../assets/icons/Group.svg";
import Group2 from "../../../assets/icons/Group2.svg";
import Ellipse from "../../../assets/icons/Ellipse2.svg";
import Ellipse2 from "../../../assets/icons/Ellipse3.svg";
import Ellipse3 from "../../../assets/icons/Ellipse4.svg";
import "./DetailAbout.css";

const About = () => {
  return (
    <div>
      <div className="containerAbout">
        <img src={Group} alt="group" className="group" />
        <a href="https://proy-ferm.netlify.app/">
          <img src={backIcon} alt="volver a Home" className="backToHome" />
        </a>
        <div className="aboutHeader">
          <div className="aboutTitle">
            <img src={two} alt="02" />
            <h1>Sobre mi</h1>
          </div>
          <div>
            <p>
              {" "}
              Soy un <strong>apasionado del diseño</strong>, me encanta todo lo
              que es capaz de comunicar en todos sus sentidos. A diario me
              dedico a <strong>enriquecer mis conocimientos.</strong> <br />
              <br />A lo largo de mi experiencia como freelance he realizado
              piezas que van desde lo editorial hasta la gráfica para eventos
              como{" "}
              <strong>
                flyers, banners, diseños para estampados, identidad visual
              </strong>
              , etc.
              <br />
              <br />
              Dentro de esta área lo que más me llama la atención y que más me
              incentiva es el diseño de <strong>identidad de marca.</strong> Es
              algo que siempre me resulta un desafío ya que es la pieza
              fundamental de la cual nace la{" "}
              <strong>imagen de un proyecto.</strong>
            </p>
          </div>
        </div>

        <div className="education">
          <h2>Educación</h2>
          <div>
            <div>
              <img src={Ellipse} alt="blue" />
              <p>
                Diseñador en comunicación social, Facultad de Bellas Artes,
                UNLP.
              </p>
            </div>
            <div>
              <img src={Ellipse2} alt="magenta" />
              <p>Community manager, Coderhouse.</p>
            </div>
            <div>
              <img src={Ellipse3} alt="magenta" />
              <p>Fotografía, ESPACIO NOVA.</p>
            </div>
          </div>
        </div>
      </div>
      <img src={Group2} alt="group" className="group2" />
    </div>
  );
};

export default About;
