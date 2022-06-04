import React from "react";
import { ProjectData } from "../../constant/projectData";
import Projects from "./projects";

function ProjectPage() {
  const projectInfo = ProjectData;

  return (
    <div className="project-container">
      {projectInfo.map(function (data) {
        return <Projects id={data.id} data={data} />;
      })}
    </div>
  );
}
export default ProjectPage;
