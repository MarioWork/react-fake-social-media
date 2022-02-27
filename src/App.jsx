import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { StyledContent } from "./components/styles/Content.styled";
import { AppRouter } from "./components/App-Router";

function App() {
  return (
    <>
      <Router>
        <Header />
        <StyledContent>
          <AppRouter />
        </StyledContent>
      </Router>
    </>
  );
}

export default App;
