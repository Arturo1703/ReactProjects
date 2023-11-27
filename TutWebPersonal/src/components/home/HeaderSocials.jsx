import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/art_is_gone"
        className="home__social-link"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com/in/arturo-l%C3%B3pez-fern%C3%A1ndez-354ab828b/"
        className="home__social-link"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://wa.me/34684270751" className="home__social-link">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default HeaderSocials;
