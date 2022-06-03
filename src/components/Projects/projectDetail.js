import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function ProjectDetail() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div className="detail">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} />
      <span>{data.startDate}</span>
      <span>{data.endDate}</span>
      <a href={data.gitLink}>Github</a>
      <a href={data.liveLink}>Live site</a>
    </div>
  );
}

export default ProjectDetail;
