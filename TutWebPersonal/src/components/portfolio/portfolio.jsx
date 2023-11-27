import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";
const portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItems);
  };
  return (
    <section className="work_container section" id="portfolio">
      <h2 className="section__title"> Recent Works</h2>

      <div className="work__filters">
        <span
          className="work__items__everything"
          onClick={() => setItems(Menu)}
        >
          Everything
        </span>
        <span
          className="work__items__mobile"
          onClick={() => filterItem("Mobile App Development")}
        >
          Mobile App Development
        </span>
        <span
          className="work__items__web"
          onClick={() => filterItem("Web Development")}
        >
          Web Development
        </span>
        <span
          className="work__items__algorithm"
          onClick={() => filterItem("Algorithm solving/ Software Development")}
        >
          Algorithm solving/ Software Development
        </span>
        <span
          className="work__items__videogames"
          onClick={() => filterItem("Videogames")}
        >
          Videogames
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
