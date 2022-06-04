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
        <p className="about-text">Fun fact about me:</p>
        <p className="about-text">{end}</p>
      </div>
      <div className="about-link-container">
        <h2 className="about-link-title">Contact links</h2>
        <a className="about-link" href={gitLink}>
          <FaGithub className="icon" />
        </a>
        <a className="about-link" href={facebookLink}>
          <FaFacebook className="icon" />
        </a>
        <a className="about-link" href={igLink}>
          <FaInstagram className="icon" />
        </a>
        <a className="about-link" href={linkedInLink}>
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
}
export default Home;
