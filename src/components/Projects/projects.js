import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Projects({ data }) {
  const { id, title, description, startDate, endDate } = data;
  return (
    <Link to={`${id}`} key={id} state={{ data: data }}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{startDate}</span>
        <span>{endDate}</span>
      </div>
    </Link>
  );
}
Projects.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
};
export default Projects;
