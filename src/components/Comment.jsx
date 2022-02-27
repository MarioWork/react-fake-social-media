import { Link } from "react-router-dom";
import { StyledComment } from "./styles/Comment.styled";

const Comment = ({ comment }) => {
  return (
    <StyledComment>
      <Link to={`/profile/${comment.owner.id}`}>
        <img src={comment.owner.picture} alt="" />
      </Link>
      <p>{comment.message}</p>
    </StyledComment>
  );
};

export default Comment;
