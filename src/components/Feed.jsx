import React from "react";
import { StyledFeed } from "./styles/Feed.styled";
import PostCard from "./PostCard";

const Feed = ({ posts }) => {
  return (
    <StyledFeed>
      {posts.length > 0 &&
        posts.map((post) => <PostCard key={post.id} post={post} />)}
    </StyledFeed>
  );
};

export default Feed;
