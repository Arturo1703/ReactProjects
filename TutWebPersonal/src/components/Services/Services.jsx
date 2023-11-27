import React from "react";
import "./Services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Mobile App Development",
    description:
      "I have an strong foundation on the Development of Android Applications",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "I'm learning to develop Web Pages, focusing both in Fron and Back End",
  },
  {
    id: 3,
    image: Image3,
    title: "Software Development",
    description:
      "I love to challenge myself to create and polish algorithms to minimize memory usage and duration",
  },
];

const services = () => {
  return (
    <section className="service container section" id="services">
      <h2 className="section__titles">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default services;
