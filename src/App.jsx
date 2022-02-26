import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { getAllPosts } from "./services/posts-service";
import Header from "./components/Header";
import Feed from "./components/Feed";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(pageNumber).then((data) =>
      setPosts((prevPosts) => prevPosts.concat(data.data))
    );
  }, [pageNumber]);

  function incrementPageNumber() {
    setPageNumber((prevPage) => (prevPage = prevPage + 1));
  }

  return (
    <>
      <Header />
      <Feed posts={posts} incrementPageNumber={incrementPageNumber} />
    </>
  );
}

export default App;
