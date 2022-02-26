import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { StyledFeed } from "./styles/Feed.styled";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";

const Feed = () => {
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
