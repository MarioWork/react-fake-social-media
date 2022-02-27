import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllPosts } from "../services/Posts-Service";
import { getTags } from "../services/Tag-Service";
import { StyledFeed } from "./styles/Feed.styled";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";

const Feed = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const tagAbortController = new AbortController();

    getAllPosts(pageNumber, abortController)
      .then((data) => setPosts((prevPosts) => prevPosts.concat(data.data)))
      .catch((err) => {});

    getTags(tagAbortController)
      .then((data) => setTags(data))
      .catch((err) => {});

    return () => {
      abortController.abort();
      tagAbortController.abort();
    };
  }, [pageNumber]);

  function incrementPageNumber() {
    setPageNumber((prevPage) => (prevPage = prevPage + 1));
  }

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={incrementPageNumber}
      hasMore={true}
      loader={<LoadingSpinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <StyledFeed>
        {posts.length > 0 &&
          posts.map((post) => <PostCard key={post.id} post={post} />)}
      </StyledFeed>
    </InfiniteScroll>
  );
};

export default Feed;
