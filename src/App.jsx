import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { getAllPosts } from "./services/posts-service";
import Header from "./components/Header";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Header />
      <Feed />
    </>
  );
}

export default App;
