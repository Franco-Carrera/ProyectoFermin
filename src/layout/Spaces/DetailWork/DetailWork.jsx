import React from "react";
import "./DetailWork.css";
import arrowLeftWork from "../../../assets/image/arrowLeftWork.svg";
import one from "../../../assets/image/01.svg";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import circle__four from "../../../assets/image/Circle-4.svg";
import detail01 from "../../../assets/image/detail01.svg";
import detail02 from "../../../assets/image/detail02.svg";
import detail03 from "../../../assets/image/detail03.svg";
import DetailEvents from "../DetailEvents/DetailEvents";
import DetailHabilities from "../DetailHabilities/DetailHabilities";

const DetailWork = () => {
  return (
    <>
      <main className="mainDetail">
        <Link to="/">
          <ReactSVG src={arrowLeftWork} className="arrowLeftWork" />
        </Link>

        <section>
          <aside className="detail__work__01__and__text">
            <ReactSVG src={one} className="first" />
            <h1>¿Cómo trabajo?</h1>
          </aside>

          <main className="detail__row__work">
            <article className="detail__card">
              <aside className="detail__card__top">
                <ReactSVG src={detail01} />
                <h2>Diagnóstico</h2>
              </aside>

              <p>
                Es la primer instancia de trabajo. Recolectamos toda la
                información relevante del nicho; mercado, competencia, cliente
                ideal y necesidades del cliente.
              </p>
            </article>

            <article className="detail__card">
              <aside className="detail__card__top">
                <ReactSVG src={detail02} />
                <h2>Estrategia</h2>
              </aside>
              <p>
                Recogida y analizada la información de nuestro cliente, se
                confecciona la Estrategia a desarrollar. Esta variará según sus
                necesidades del cliente.
              </p>
            </article>

            <article className="detail__card">
              <aside className="detail__card__top">
                <ReactSVG src={detail03} />
                <h2>Creación</h2>
              </aside>
              <p>
                Superadas las dos primeras instancias pasamos a crear contendio
                digital: posteos, carrusel, reels. Cada posteo se elabora con un
                objetivo en sí mismo, respondiendo a un objetivo macro.
              </p>
            </article>
          </main>
          <ReactSVG src={circle__four} className="circle__four" />
        </section>
        {/* fin cards */}
      </main>
      <DetailEvents />
      <DetailHabilities />
    </>
  );
};

export default DetailWork;
