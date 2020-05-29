import styled from "styled-components";
import anime from "animejs";

import { Link } from "gatsby";

import {
  WHITE,
  DARK_PURPLE,
  BUTTON_SHADOW,
  breakpoint,
} from "../constants/theme";

export const ContainerNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;

  width: 100%;
  padding: 1.5em;
  box-sizing: border-box;
  background-color: ${DARK_PURPLE};

  .spacer {
    flex: 1;
  }

  a.active {
    border-bottom: 2px solid ${WHITE};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    background: transparent;
    border: none;
    color: white;
    overflow: hidden;

    &:hover {
      // transform: translate(0, 1px);
      // text-decoration: none;
      // box-shadow: none;
      cursor: pointer;
    }

    &:active,
    &:focused,
    &:visited {
      text-decoration: none;
      outline: none;
    }
  }

  .desktop-navbar {
    display: flex;
    align-items: center;
    ${breakpoint.down("m")`
      display: none;
    `}
    .right {
      display: flex;
    }
  }

  .mobile-navbar {
    display: flex;

    ${breakpoint.up("m")`
      display: none;
    `}

    .mobile-overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-sizing: border-box;
      background-color: ${DARK_PURPLE};
      z-index: 1;
      overflow: hidden;
      display: none;
      flex-direction: column;
      // justify-content: space-between;
      align-items: flex-start;
      padding: 1.5em;

      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }

      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        .left {
          display: none;
        }

        .center {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          a {
            padding: 1em 1em;
            margin: 0;
          }
        }

        .right {
          display: none;
        }
      }

      .spacer {
        flex: 0;
      }
    }
  }
`;

const BaseLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 1em;
  padding: 0.6em 1.5em;
  font-size: 0.85em;
  font-weight: 500;

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

export const NavLink = styled(BaseLink)`
  color: ${WHITE};

  ${breakpoint.down("l")`
    padding: 0.6em 0.6em;

    &:first-child {
      padding: 0.6em 1.5em;
    }
  `}
`;

export const ButtonLink = styled(BaseLink)`
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

export const animOpenMobileNav = async el => {
  if (!el.current) return;
  el.current.style.display = "flex";
  el.current.style.opacity = 0;
  await anime({
    targets: el.current,
    opacity: [0, 1],
    duration: 180,
    easing: "easeInSine",
  }).finished;
};

export const animCloseMobileNav = async el => {
  if (!el.current) return;
  await anime({
    targets: el.current,
    opacity: [1, 0],
    duration: 160,
    easing: "easeOutSine",
  }).finished;
  el.current.style.display = "none";
  el.current.style.opacity = 0;
};
