import { useState, useEffect } from "react";
import { getUserPosts } from "../services/Posts-Service";
import { getUser } from "../services/User-Service";
import { USER_ID } from "../utils/Constants";
import {
  StyledProfile,
  Container,
  Line,
  UserStatsContainer,
} from "./styles/Profile.styled";

const Profile = () => {
  const [user, setUser] = useState("");
  const [userPosts, setUserPosts] = useState({ total: 0, data: [] });

  useEffect(() => {
    const userAbortController = new AbortController();

    const postsAbortController = new AbortController();

    //Get user details
    getUser(USER_ID, userAbortController)
      .then((data) => setUser(data))
      .catch((err) => {});

    //Get user posts
    getUserPosts(USER_ID, postsAbortController)
      .then((data) => setUserPosts(data))
      .catch((err) => {});

    //After running abort fetches
    return () => {
      userAbortController.abort();
      postsAbortController.abort();
    };
  }, []);

  return (
    <StyledProfile>
      <Container>
        <img src={user.picture} alt="" />
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
        <UserStatsContainer>
          <div>
            <span>Likes</span>
            <span>
              {userPosts.data.reduce((acc, currentVal) => {
                return acc + currentVal.likes;
              }, 0)}
            </span>
          </div>
          <div>
            <span>Posts</span>
            {userPosts.total}
            <span></span>
          </div>
        </UserStatsContainer>
      </Container>

      <Line />
    </StyledProfile>
  );
};

export default Profile;
