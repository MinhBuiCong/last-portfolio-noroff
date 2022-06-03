import React from "react";
import PropTypes from "prop-types";

function Projects(props) {
  console.log(props);
  const { id, title, description, startDate, endDate } = props;
  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{startDate}</span>
      <span>{endDate}</span>
    </div>
  );
}

Projects.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
};

export default Projects;
