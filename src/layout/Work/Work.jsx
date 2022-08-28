import "./Work.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import one from "../../assets/image/01.svg";
import { texts } from "../../layout/sectionsText/Home.texts.json";
import { getCategories } from "../../utils/firebaseConfig";

//sectionChangeAnimation sin uso

//Componente que usa clases universales de DetailGalery

const Work = () => {
  const [categories, setCategories] = useState();

  const navLinkStyles = ({ isActive }) => {
    return {
      transition: isActive ? "background-color 0.1s" : "none",
      color: isActive ? "#ffffff" : "#019eff",
      backgroundColor: isActive ? "#019eff" : "white",
    };
  };

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
        console.log(categories);
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      setCategories();
    };
  }, []);
  return (
    <>
      <section id="work" className="work sectionChange sectionChangeAnimation">
        <main className="main__top__info">
          <div className="work__header">
            <picture className="work__picture">
              <img src={one} alt={texts.home.graphicAlt} />
            </picture>
            <h1>{texts.home.secondSection.titleWork}</h1>
          </div>

          <article className="work__text">
            <aside className="line-height">
              <p>{texts.home.secondSection.allParrafo}</p>
              <Link className="link__button" to="/detail-work">
                <button className="button__home button__home--work__about">
                  {texts.home.button}
                </button>
              </Link>
            </aside>
          </article>
        </main>
      </section>

      <header className="myHeaderNav galery__types__fotography sectionChange">
        <aside>
          <div className="radio">
            {categories?.map((category) => (
              <NavLink
                key={category.id}
                to={`/category/${category.id}`}
                className="NavLinkWork"
                style={navLinkStyles}
              >
                <input
                  className="radio__input"
                  type="radio"
                  value="option1"
                  name="myRadio"
                  id={category.labelFor}
                />
                <label className="pointer" htmlFor={category.labelFor}>
                  {category.description}
                </label>
              </NavLink>
            ))}
          </div>
        </aside>
      </header>
    </>
  );
};

export default Work;
