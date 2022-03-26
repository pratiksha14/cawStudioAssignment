import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import BlogItems from "./BlogItems";
import "./BlogListing.css";

const BlogListing = () => {
  const blogListing = useSelector((state) => state.blogs.blogData);
  const [blogData, setBlogData] = useState(blogListing);
  const [isSearch, setSearch] = useState(false);
  const inputRef = useRef();

  const data = isSearch ? blogData : blogListing;
  const onSearchClick = () => {
    setSearch(true);
    let searchedBlog;
    if (inputRef.current.value !== "") {
      searchedBlog = blogListing.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(inputRef.current.value.toLowerCase());
      });
      setBlogData(searchedBlog);
    } else {
      setSearch(false);
    }
  };

  return (
    <div className="listing">
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={onSearchClick}>Search</button>
      </div>
      <div className="card-listing">
        {data.map((item) => {
          return (
            <BlogItems
              key={item.id}
              id={item.id}
              title={item.title}
              name={item.bloggerName}
              content={item.blogContent}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogListing;
