import { useState, useEffect } from "react";
import { getUser } from "../services/User-Service";
import { USER_ID } from "../utils/Constants";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    getUser(USER_ID, abortController)
      .then((data) => setUser(data))
      .catch((err) => {});

    return () => abortController.abort();
  }, []);

  console.log(user);
  return (
    <div>{user != "" && <h1>{user.firstName + " " + user.lastName}</h1>}</div>
  );
};

export default Profile;
