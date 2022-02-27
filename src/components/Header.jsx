import { Link } from "react-router-dom";
import { StyledHeader, Nav } from "../components/styles/Header.styled";
import { USER_ID } from "../utils/Constants";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Link to="/">
          <h1>FAKE SOCIAL</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">Feed</Link>
          </li>
          <li>
            <Link to={`/profile/${USER_ID}`}>Profile</Link>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
