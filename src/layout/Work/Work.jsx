import React from "react";
import "./Work.css";
import work from "../../assets/image/image-work.svg";
import one from "../../assets/image/01.svg";

const Work = () => {
  return (
    <>
      <section className="work container__work">
        <main>
          <div className="work-header">
            <picture>
              <img src={one} alt="one" />
            </picture>
            <h1>Trabajos</h1>
          </div>
          <article className="work-text">
            <aside>
              <p>
                A lo largo de mi carrera me ha tocado trabajar con una amplia
                gama de clientes que van desde espacios culturales hasta
                comercios como restaurantes, centros de estética y muchos más.
              </p>
              <button>Ver más</button>
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
