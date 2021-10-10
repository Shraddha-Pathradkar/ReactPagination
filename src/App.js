import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./Components/Posts";
import Pagination from "./Components/Pagination";
const actionUrl = "https://jsonplaceholder.typicode.com/posts";
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(actionUrl);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">My Pagination Practice</h2>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        totalPosts={posts.length}
        postPerPage={postPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
