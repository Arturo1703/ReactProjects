import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const home = () => {
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/arturo-l%C3%B3pez-fern%C3%A1ndez-354ab828b/",
      "_blank"
    );
  };
  return (
    <section className="home conteiner" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Arturo López</h1>
        <span className="home__education">I'm a Computer Science Engineer</span>
        <div>
          <HeaderSocials />
          <button className="btn" onClick={handleLinkedInClick}>
            Hire Me
          </button>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default home;
