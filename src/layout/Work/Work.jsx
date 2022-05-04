import React from "react";
import "./Work.css";
import { Fragment } from "react";
import work from "../../assets/image/image-work.svg";
import one from "../../assets/image/01.svg";

const Work = () => {
  return (
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