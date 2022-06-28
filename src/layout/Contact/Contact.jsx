import "./Contact.css";
import { ReactSVG } from "react-svg";
import three from "../../assets/image/03.svg";
import { FaBehance } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import circleThree from "../../assets/image/Circle-3.svg";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <main>
          <aside className="contact__header">
            <ReactSVG src={three} className="__03" />
            <h1>¡Contactame!</h1>
          </aside>
          <p className="text-center">epelefermin@gmail.com</p>
          <article className="col__list__items contact__social__items">
            <li className="line__list__item one">
              <FaBehance />
            </li>
            <li className="line__list__item two">
              <FaWhatsapp />
            </li>
          </article>
        </main>

        {/*  */}
        <aside className="contact__column__two__circle">
          <ReactSVG src={circleThree} className="circle__three" />
        </aside>
      </section>
    </>
  );
};

export default Contact;
