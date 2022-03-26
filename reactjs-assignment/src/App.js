import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { blogActions } from "./store/blog-store";
import BlogListing from "./BlogList/BlogListing";
import BlogDetails from "./BlogPost/BlogDetails";
import Header from "./UI/Header";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const checkApi = async () => {
      setErrorMessage(null);
      const response = await fetch(
        "https://blog-assignment.free.beeceptor.com/blogs"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong!.....");
      }
      const data = await response.json();
      dispatch(blogActions.setBlogData(data.blogs));
    };

    try {
      checkApi();
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {errorMessage && <div className="error">{errorMessage}</div>}
      <Routes>
        <Route path="/:id/:title" element={<BlogDetails />} />
        <Route path="/" element={<BlogListing />} />
      </Routes>
    </div>
  );
}
