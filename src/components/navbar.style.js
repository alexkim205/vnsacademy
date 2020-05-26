import styled from "styled-components";
import { Link } from "gatsby";

import {
  WHITE,
  DARK_PURPLE,
  BUTTON_SHADOW,
  breakpoint,
} from "../constants/theme";

const BaseLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 1em;
  padding: 0.6em 1.5em;
  font-size: 0.9em;
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
