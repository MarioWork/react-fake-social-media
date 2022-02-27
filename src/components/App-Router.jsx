import { Route, Routes } from "react-router-dom";
import Feed from "./Feed";
import Profile from "./Profile";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route exact path="/profile/:id" element={<Profile />} />
    </Routes>
  );
};
