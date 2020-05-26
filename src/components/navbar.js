import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { WHITE, DARK_PURPLE, BUTTON_SHADOW } from "../constants/theme";

const ContainerNav = styled.nav`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  padding: 1.5em;
  box-sizing: border-box;
  flex-direction: row;
  background-color: ${DARK_PURPLE};

  .spacer {
    flex: 1;
  }

  a.active {
    border-bottom: 2px solid ${WHITE};
  }
`;

const BaseLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 1em;
  padding: 0.6em 1.5em;
  font-size: 0.9em;

  &:first-child,
  &:last-child {
    margin: 0;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active,
  &:focused,
  &:visited {
    text-decoration: none;
    outline: none;
  }
`;

const NavLink = styled(BaseLink)`
  color: ${WHITE};
`;

const ButtonLink = styled(BaseLink)`
  background-color: ${WHITE};
  color: ${DARK_PURPLE};
  border-radius: 3px;
  box-shadow: ${BUTTON_SHADOW};
  transition: 0.1s all;

  &:hover {
    transform: translate(0, 1px);
    text-decoration: none;
    box-shadow: none;
  }
`;

const Navbar = () => {
  return (
    <ContainerNav>
      <NavLink to="/" active="active">
        Logo
      </NavLink>
      <div className="spacer"></div>
      <NavLink to="/location" active="active">
        Location
      </NavLink>
      <NavLink to="/classes" active="active">
        Classes
      </NavLink>
      <NavLink to="/schedule" active="active">
        Schedule
      </NavLink>
      <NavLink to="/hiring" active="active">
        Hiring
      </NavLink>
      <div className="spacer"></div>
      <ButtonLink to="/contact" active="active">
        Enroll
      </ButtonLink>
    </ContainerNav>
  );
};

export default Navbar;
