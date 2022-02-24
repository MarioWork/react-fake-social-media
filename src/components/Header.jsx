import React from "react";
import { StyledHeader, Nav } from "../components/styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <h1>FAKE SOCIAL</h1>
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
