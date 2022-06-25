import React from "react";
import "./Work.css";
<<<<<<< HEAD
=======
import { Fragment } from "react";
>>>>>>> b572c1f16cb57f21e4a1744c11cc9d0c8fd8a2b0
import work from "../../assets/image/image-work.svg";
import one from "../../assets/image/01.svg";

const Work = () => {
  return (
<<<<<<< HEAD
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
=======
    <Fragment>
        <section class='work'>
            <div>
                <div class='work-header'>
                    <picture>
                        <img src={one} alt='one' />
                    </picture>
                    <h2>Trabajos</h2>
                </div>
                <div class='work-text'>
                    <div>
                        <p>
                            A lo largo de mi carrera me ha tocado trabajar con una amplia gama de clientes que van desde espacios culturales hasta comercios como restaurantes, centros de estética y muchos más.
                        </p>
                        <button>
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
            <picture>
                <img src={work} alt='work' />
            </picture>
        </section>
    </Fragment>
  )
}

export default Work
>>>>>>> b572c1f16cb57f21e4a1744c11cc9d0c8fd8a2b0
