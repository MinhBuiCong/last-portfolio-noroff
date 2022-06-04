import React from "react";
import "../../App.scss";
import { AboutData } from "../../constant/aboutData";

function Home() {
  const { id, title, image, description, gitLink, facebookLink, igLink } =
    AboutData;
  return (
    <div className="about">
      <h1>{title}</h1>
      <img src={image} alt={id} />
      <p>{description}</p>
      <a href={gitLink}>GitHub</a>
      <a href={facebookLink}>facebook</a>
      <a href={igLink}>instagram</a>
    </div>
  );
}
export default Home;
