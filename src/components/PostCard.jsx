import { useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { firstLetterToUpperCase } from "../utils/FirstLetterToUpperCase";
import { updatePost } from "../services/Posts-Service";
import { getPostComments, createComment } from "../services/Comments-Service";
import { USER_ID, USER_PICTURE } from "../utils/Constants";
import {
  StyledPostCard,
  StyledPostFirstContainer,
  StyledPostSecondContainer,
  Text,
  CommentsSectionContainer,
  Line,
  InputCommentContainer,
  CommentsListContainer,
} from "./styles/PostCard.styled";

import Comment from "./Comment";
import LoadingSpinner from "./LoadingSpinner";

const PostCard = ({
  post,
  setPosts,
  post: { text, image, likes, publishDate, owner, tags },
}) => {
  const [isHover, setIsHover] = useState(false);
  const [openCommentTab, setOpenCommentTab] = useState(false);
  const [inputComment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [commentsListPage, setCommentsListPage] = useState(0);
  const [hasMoreComments, setHasMoreComments] = useState(true);

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

  function handleLikeClick(e) {
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
  }

  function getComments() {
    getPostComments(post.id, commentsListPage)
      .then((data) => {
        setCommentsList(data.data);
      })
      .catch((err) => setHasMoreComments(false));
  }

  //Open the comment tab
  function handleCommentClick(e) {
    e.preventDefault();
    setOpenCommentTab((prevValue) => !prevValue);
    if (openCommentTab === false) {
      getComments();
    }
  }

  function handleSendCommentClick(e) {
    if (e.key === "Enter" && inputComment != "") {
      createComment(post.id, USER_ID, inputComment);
      setComment("");
    }
  }

  function handleInputOnChange(e) {
    setComment(e.target.value);
  }

  function incrementCommentsPageNumber() {
    setCommentsListPage((prevPage) => (prevPage = prevPage + 1));
  }

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
      <CommentsSectionContainer>
        <button onClick={handleCommentClick}>Comment</button>
        {openCommentTab && (
          <>
            <Line />
            <InputCommentContainer>
              <Link to={`/profile/${owner.id}`}>
                <img src={USER_PICTURE} alt=""></img>
              </Link>
              <input
                type="text"
                placeholder="Insert your comment here..."
                onKeyDown={handleSendCommentClick}
                value={inputComment}
                onChange={handleInputOnChange}
              />
            </InputCommentContainer>
            <Line />

            <CommentsListContainer>
              <InfiniteScroll
                dataLength={commentsList.length}
                next={incrementCommentsPageNumber}
                hasMore={hasMoreComments}
                loader={<LoadingSpinner />}
                endMessage={<></>}
              >
                {commentsList.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </InfiniteScroll>
            </CommentsListContainer>
          </>
        )}
      </CommentsSectionContainer>
    </StyledPostCard>
  );
};

export default PostCard;
