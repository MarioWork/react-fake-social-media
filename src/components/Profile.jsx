import { useState, useEffect } from "react";
import { getUserPosts } from "../services/Posts-Service";
import { getUser } from "../services/User-Service";
import { USER_ID } from "../utils/Constants";
import PostCard from "./PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  StyledProfile,
  Container,
  Line,
  UserStatsContainer,
} from "./styles/Profile.styled";
import LoadingSpinner from "./LoadingSpinner";

const Profile = () => {
  const [user, setUser] = useState("");
  const [userPosts, setUserPosts] = useState({ total: 0, data: [] });
  const [postsPage, setPostsPage] = useState(0);

  useEffect(() => {
    const userAbortController = new AbortController();
    const postsAbortController = new AbortController();

    //Get user details
    getUser(USER_ID, userAbortController)
      .then((data) => setUser(data))
      .then(
        //Get user posts after user loaded
        getUserPosts(USER_ID, postsAbortController, postsPage)
          .then((data) =>
            setUserPosts(
              (prevData) =>
                (prevData = {
                  ...prevData,
                  total: data.total,
                  data: prevData.data.concat(data.data),
                })
            )
          )
          .catch((err) => {
            console.log(err);
          })
      )
      .catch((err) => {});

    //After running abort fetches
    return () => {
      userAbortController.abort();
      postsAbortController.abort();
    };
  }, [postsPage]);

  console.log(userPosts);

  function incrementPostsPage() {
    setPostsPage((prevPage) => (prevPage = prevPage + 1));
  }

  return (
    <StyledProfile>
      {user != "" && (
        <Container>
          <img src={user.picture} alt="" />
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
          <UserStatsContainer>
            <div>
              <span>Posts</span>
              {userPosts.total}
              <span></span>
            </div>
            <div>
              <span>{user.location.country}</span>
            </div>
          </UserStatsContainer>
        </Container>
      )}
      <Line />
      <InfiniteScroll
        dataLength={userPosts.data.length}
        next={incrementPostsPage}
        hasMore={true}
        loader={<LoadingSpinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {userPosts.data.length > 0 &&
          userPosts.data.map((post) => <PostCard key={post.id} post={post} />)}
      </InfiniteScroll>
    </StyledProfile>
  );
};

export default Profile;
