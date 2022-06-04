import React from "react";
import { AboutData } from "../../constant/aboutData";

function Home() {
  const {
    id,
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
    <div className="about">
      <h1>{title}</h1>
      <img src={image} alt={id} />
      <p>{intro}</p>
      <p>{main}</p>
      <p>{end}</p>
      <a href={gitLink}>GitHub</a>
      <a href={facebookLink}>Facebook</a>
      <a href={igLink}>Instagram</a>
      <a href={linkedInLink}>LinkedIn</a>
    </div>
  );
}
export default Home;
