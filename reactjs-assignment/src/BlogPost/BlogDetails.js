import { Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./BlogDetails.css";

const BlogDetails = () => {
  const blogListing = useSelector((state) => state.blogs.blogData);
  const [isToShowComment, setCommentVisibility] = useState(false);
  const navigate = useNavigate();
  const { id, title } = useParams();

  const selectedBlog = blogListing.filter((item) => item.id === id);

  const NavigateToBlogs = () => {
    navigate(`/`);
  };

  const toggleComment = () => {
    setCommentVisibility((prevState) => !prevState);
  };

  const showComment = (comments = []) => {
    if (comments.length === 0) {
      return (
        <div className="comment-section">
          <div className="comment-section-inner">No comments found..</div>
        </div>
      );
    }
    return (
      <div className="comment-section">
        <h3>Comments</h3>
        {comments.map((com) => {
          return (
            <div className="comment-content">
              <p>
                @{com.commerterName} | {com.comment}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="blog-details">
      {selectedBlog.map((item) => {
        return (
          <Fragment key={id}>
            <h1>{title}</h1>
            <div className="flex-container">
              <div className="first-part">
                <span>Blog By: @{item.bloggerName}</span>
                <p>Date: {item.date}</p>
              </div>
              <div className="second-part">{item.blogContent}</div>
            </div>
            {isToShowComment && showComment(item.comments)}
            <div className="blog-buttons">
              <button onClick={NavigateToBlogs}>Back</button>
              <button onClick={toggleComment}>Show Comments</button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default BlogDetails;
