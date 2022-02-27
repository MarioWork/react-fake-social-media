import { Link } from "react-router-dom";
import { StyledHeader, Nav } from "../components/styles/Header.styled";

const Header = () => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.reload(false);
  };

  return (
    <StyledHeader>
      <Nav>
        <h1 onClick={handleLogoClick}>FAKE SOCIAL</h1>
        <ul>
          <li>
            <Link to="/">Feed</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
