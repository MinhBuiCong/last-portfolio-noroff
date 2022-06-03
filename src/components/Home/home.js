import React from "react";
import "../../App.scss";
import { ProjectData } from "../../constant/projectData";
import Projects from "../Projects/projects";

function Home() {
  return (
    <main className="drinks">
      <h1>home</h1>
      {ProjectData.map(function (data) {
        return <Projects key={data.id} drink={data} />;
      })}
    </main>
  );
}
export default Home;
