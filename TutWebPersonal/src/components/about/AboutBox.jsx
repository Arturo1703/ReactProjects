import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">12</h3>
          <span className="bout__subtitle">Projects Completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon"></i>
        <div>
          <h3 className="about__title">62</h3>
          <span className="bout__subtitle icon-cup">Cups of coffee</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-clock"></i>
        <div>
          <h3 className="about__title">97</h3>
          <span className="bout__subtitle">Hours Debugging Mistakes</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
