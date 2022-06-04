import React from "react";
import { AboutData } from "../../constant/aboutData";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

function Home() {
  const {
    title,
    image,
    intro,
    main,
    end,
    gitLink,
    facebookLink,
    igLink,
    linkedInLink,
  } = AboutData;
  return (
    <div className="about-container">
      <h1 className="about-title">{title}</h1>
      <div
        className="about-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="about-text-container">
        <p className="about-text">{intro}</p>
        <p className="about-text">{main}</p>
        <p className="about-text">{end}</p>
      </div>
      <div className="about-link-container">
        <a className="about-link" href={gitLink}>
          <FaGithub />
        </a>
        <a className="about-link" href={facebookLink}>
          <FaFacebook />
        </a>
        <a className="about-link" href={igLink}>
          <FaInstagram />
        </a>
        <a className="about-link" href={linkedInLink}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
export default Home;
