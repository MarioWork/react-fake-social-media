import { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { firstLetterToUpperCase } from "../utils/FirstLetterToUpperCase";
import { Link } from "react-router-dom";
import {
  StyledPostCard,
  StyledPostFirstContainer,
  StyledPostSecondContainer,
  Text,
} from "./styles/PostCard.styled";
import { updatePost } from "../services/Posts-Service";

const PostCard = ({
  post,
  setPosts,
  post: { text, image, likes, publishDate, owner, tags },
}) => {
  const [isHover, setIsHover] = useState(false);

  //Convert a string datetime to a inverted date
  const convertDate = (dateString) => {
    //Convert str to date
    let date = new Date(dateString);

    //Get the month string length
    let monthLength = date.getMonth().toString().length;

    //if month length == 1 add a 0 to the start of the string
    let monthStr = monthLength === 1 ? `0${date.getMonth()}` : date.getMonth();

    //join day month and year in a single string
    let finalDateString = `${date.getDate()}-${monthStr}-${date.getFullYear()}`;

    return finalDateString;
  };

  function handleLikeMouseEnter(e) {
    e.preventDefault();
    setIsHover(true);
  }

  function handleLikeMouseLeave(e) {
    e.preventDefault();
    setIsHover(false);
  }

  const handleLikeClick = (e) => {
    e.preventDefault();

    //Add a like to the post
    const updatedPost = { ...post, likes: +post.likes + 1 };

    //Request update
    updatePost(updatedPost);

    //Update only the post in the postcard in question
    setPosts((prevItems) =>
      prevItems.map((item) => {
        return item.id !== post.id ? item : updatedPost;
      })
    );
  };

  return (
    <StyledPostCard>
      <img src={image} alt="" />
      <StyledPostFirstContainer>
        <Link to={`/profile/${owner.id}`}>
          <img src={owner.picture} alt=""></img>
        </Link>
        {tags.map((tag) => (
          <p key={tag}>{firstLetterToUpperCase(tag)}</p>
        ))}
      </StyledPostFirstContainer>
      <Text>{firstLetterToUpperCase(text)}</Text>
      <StyledPostSecondContainer>
        <div
          onMouseEnter={handleLikeMouseEnter}
          onMouseLeave={handleLikeMouseLeave}
          onClick={handleLikeClick}
        >
          {isHover === true ? (
            <FaThumbsUp color="#673AB7" />
          ) : (
            <FaRegThumbsUp color="#673AB7" />
          )}
          <p>{likes}</p>
        </div>
        <p>{convertDate(publishDate)}</p>
      </StyledPostSecondContainer>
    </StyledPostCard>
  );
};

export default PostCard;
