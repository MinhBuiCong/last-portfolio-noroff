import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Projects({ data }) {
  const { id, title, shortDescription } = data;
  return (
    <Link to={`${id}`} key={id} className="card-link" state={{ data: data }}>
      <Card className="card-container" style={{ width: "30rem" }}>
        <Card.Body className="card-text-container">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text className="card-description">{shortDescription}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
Projects.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
  }),
};
export default Projects;
