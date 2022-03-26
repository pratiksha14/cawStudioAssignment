import { useNavigate } from "react-router-dom";
import "./BlogItems.css";

const BlogItems = (props) => {
  const navigate = useNavigate();
  const NavigateToDetails = () => {
    navigate(`/${props.id}/${props.title}`);
  };
  return (
    <div className="blog-item" onClick={NavigateToDetails}>
      <h1>{props.title}</h1>
      <div className="middle-content">
        <p>By @{props.name}</p>
        <p>{props.date}</p>
      </div>
      <div>{props.content}</div>
      {/* <footer>
        <Link to="/">Show More</Link>
      </footer> */}
    </div>
  );
};

export default BlogItems;
