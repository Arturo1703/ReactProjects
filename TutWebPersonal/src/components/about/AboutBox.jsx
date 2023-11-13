import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">198</h3>
          <span className="bout__subtitle">Project Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon"></i>
        <div>
          <h3 className="about__title">5670</h3>
          <span className="bout__subtitle icon-cup">Cup of coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">427</h3>
          <span className="bout__subtitle">Satisfied Clients</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
