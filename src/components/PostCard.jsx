import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { firstLetterToUpperCase } from "../utils/firstLetterToUpperCase";

import {
  StyledPostCard,
  StyledPostFirstContainer,
  StyledPostSecondContainer,
  Text,
} from "./styles/PostCard.styled";

const PostCard = ({
  post: { text, image, likes, publishDate, owner, tags },
}) => {
  //Convert a string datetime to a inverted date
  const convertDate = (dateString) => {
    //Convert str to date
    let date = new Date(dateString);

    //Get the month string length
    let monthLength = date.getMonth().toString().length;

    //if month length == 1 add a 0 to the start of the string
    let monthStr = monthLength == 1 ? `0${date.getMonth()}` : date.getMonth();

    //join day month and year in a single string
    let finalDateString = `${date.getDate()}-${monthStr}-${date.getFullYear()}`;

    return finalDateString;
  };

  return (
    <StyledPostCard>
      <img src={image} alt="" />
      <StyledPostFirstContainer>
        <img src={owner.picture} alt="" />
        {tags.map((tag) => (
          <p key={tag}>{firstLetterToUpperCase(tag)}</p>
        ))}
      </StyledPostFirstContainer>
      <Text>{firstLetterToUpperCase(text)}</Text>
      <StyledPostSecondContainer>
        <div>
          <FaThumbsUp color="#673AB7" />
          <p>{likes}</p>
        </div>
        <p>{convertDate(publishDate)}</p>
      </StyledPostSecondContainer>
    </StyledPostCard>
  );
};

export default PostCard;
