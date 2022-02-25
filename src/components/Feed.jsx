import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { StyledFeed } from "./styles/Feed.styled";
import PostCard from "./PostCard";
import LoadingSpinner from "./LoadingSpinner";

const Feed = ({ posts, incrementPageNumber }) => {
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
