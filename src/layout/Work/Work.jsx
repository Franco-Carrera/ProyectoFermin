import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";
import work from "../../assets/image/image-work.svg";
import one from "../../assets/image/01.svg";

const Work = () => {
  return (
    <>
      <section className="work" id="work">
        <main>
          <div className="work-header">
            <picture>
              <img src={one} alt="one" />
            </picture>
            <h1>Trabajos</h1>
          </div>
          <article className="work-text">
            <aside>
              <p> A lo largo de mi carrera me ha tocado trabajar con </p>
              <p>una amplia gama de clientes que van desde espacios</p>
              <p>culturales hasta comercios como restaurantes,</p>
              <p> centros de estética y muchos más.</p>
              <Link className="link__button" to={`/detail-work`}>
                <button className="button__home">Ver más</button>
              </Link>
            </aside>
          </article>
        </main>
        <picture>
          <img src={work} alt="work" />
        </picture>
      </section>
    </>
  );
};

export default Work;
