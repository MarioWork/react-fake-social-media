import { useState, useEffect } from "react";
import getAllPosts from "./services/posts-service";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts(pageNumber).then((data) => setPosts(data.data));
  }, [pageNumber]);

  return (
    <div
      style={{
        display: "flex",
        "algin-items": "center",
        "flex-direction": "column",
      }}
    >
      <button
        onClick={() =>
          setPageNumber(
            (prevPageNumber) => (prevPageNumber = prevPageNumber + 1)
          )
        }
      >
        Next Page
      </button>
      {posts.map((post) => (
        <img
          style={{
            width: "400px",
            height: "300px",
            "object-fit": "cover",
            padding: "5px",
          }}
          key={post.id}
          src={post.image}
        />
      ))}
    </div>
  );
}

export default App;
