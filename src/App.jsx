import { useState, useEffect } from "react";
import { getAllPosts } from "./services/posts-service";
import Header from "./components/Header";
import Feed from "./components/Feed";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(pageNumber).then((data) => setPosts(data.data));
  }, [pageNumber]);

  return (
    <>
      <Header />
      <Feed posts={posts} />
    </>
  );
}

export default App;
