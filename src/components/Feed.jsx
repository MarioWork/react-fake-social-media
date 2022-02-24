import React from "react";
import { StyledFeed } from "./styles/Feed.styled";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <StyledFeed>
      {posts.length > 0 &&
        posts.map((post) => <Post key={post.id} post={post} />)}
    </StyledFeed>
  );
};

export default Feed;
