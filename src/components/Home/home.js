import React from "react";
import { AboutData } from "../../data/aboutData";
import Footer from "../Footer/footer";
import { slide as Menu } from 'react-burger-menu'

function Home() {
  const {
    title,
    image,
    intro,
    main,
    end,
  } = AboutData;
  return (
      <div className="home-content">
          <h1 className="title">{intro}</h1>
          <h2 className="sub-title">{main}</h2>
      {/* <h1 className="about-title">{title}</h1>
      <div
        className="about-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="about-text-container">
        <p className="about-text">{intro}</p>
        <p className="about-text">{main}</p>
        <p className="about-text">Fun fact about me:</p>
        <p className="about-text">{end}</p>
          </div> */}
          {/* <Footer/> */}
    </div>
  );
}
export default Home;
