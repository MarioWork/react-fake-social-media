import React from "react";
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
            <a href="">Feed</a>
          </li>
          <li>
            <a href="">Profile</a>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
