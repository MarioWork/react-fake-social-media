import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import { StyledContent } from "./components/styles/Content.styled";

function App() {
  return (
    <>
      <Router>
        <Header />
        <StyledContent>
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </StyledContent>
      </Router>
    </>
  );
}

export default App;
