import { useLocation } from "react-router-dom";

function ProjectDetail() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div className="detail">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <span>{data.startDate}</span>
      <span>{data.endDate}</span>
    </div>
  );
}

export default ProjectDetail;
