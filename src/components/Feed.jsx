import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllPosts } from "../services/posts-service";
import { StyledFeed } from "./styles/Feed.styled";
import { FeedContainer } from "./styles/FeedContainer.styled";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";

const Feed = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    getAllPosts(pageNumber, abortController)
      .then((data) => setPosts((prevPosts) => prevPosts.concat(data.data)))
      .catch((err) => {});

    return () => {
      abortController.abort();
    };
  }, [pageNumber]);

  function incrementPageNumber() {
    setPageNumber((prevPage) => (prevPage = prevPage + 1));
  }

  return (
    <FeedContainer>
      <StyledFeed>
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
          {posts.length > 0 &&
            posts.map((post) => (
              <PostCard key={post.id} post={post} setPosts={setPosts} />
            ))}
        </InfiniteScroll>
      </StyledFeed>
    </FeedContainer>
  );
};

export default Feed;
