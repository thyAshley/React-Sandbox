import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <NavContainer>
      <h1>
        <Link id="logo" to="/">
          Main
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: "50%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
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
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
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
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  position: absolute;
  width: 100%;
  bottom: -80%;
  left: 60%;
`;

export default Nav;
