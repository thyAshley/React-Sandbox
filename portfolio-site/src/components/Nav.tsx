import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <h1>
        <a id="logo" href="/#">
          Main
        </a>
      </h1>
      <ul>
        <li>
          <a href="/#">1. About Us</a>
        </li>
        <li>
          <a href="/#">2. Our Work</a>
        </li>
        <li>
          <a href="/#">3. Contact Us</a>
        </li>
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  align-items: center;
  background: #282828;
  display: flex;
  justify-content: space-between;
  margin: auto;
  min-height: 10vh;
  padding: 1rem 10rem;
  width: 100%;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
