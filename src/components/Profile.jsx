import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../services/Posts-Service";
import { getUser } from "../services/User-Service";
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
  const [userPosts, setUserPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [postsPage, setPostsPage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const userAbortController = new AbortController();
    const postsAbortController = new AbortController();

    //Get user details
    getUser(id, userAbortController)
      .then((data) => setUser(data))
      .then(
        //Get user posts after user loaded
        getUserPosts(id, postsAbortController, postsPage)
          .then((data) => {
            setUserPosts(data.data);
            setTotal(data.total);
          })
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
              {total}
              <span></span>
            </div>
            <div>
              <span>{user.location.country}</span>
            </div>
          </UserStatsContainer>
        </Container>
      )}
      <Line />
      {userPosts.length > 0 && (
        <InfiniteScroll
          dataLength={userPosts.length}
          next={incrementPostsPage}
          hasMore={true}
          loader={<LoadingSpinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} setPosts={setUserPosts} />
          ))}
        </InfiniteScroll>
      )}
    </StyledProfile>
  );
};

export default Profile;
