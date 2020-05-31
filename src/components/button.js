import styled from "styled-components";
import { Link } from "gatsby";

import { WHITE, BRIGHT_PURPLE, BUTTON_SHADOW } from "../constants/theme";

const Button = styled(Link)`
  background-color: ${BRIGHT_PURPLE};
  border-radius: 3px;
  box-shadow: ${BUTTON_SHADOW};
  color: ${WHITE};
  padding: 0.7rem 1.4rem;
  text-decoration: none;
  transition: 0.1s all;

  &:hover {
    transform: translate(0, 2px);
    text-decoration: none;
    box-shadow: none;
  }
`;

export const FormButton = styled.button`
  background-color: ${BRIGHT_PURPLE};
  border-radius: 3px;
  box-shadow: ${BUTTON_SHADOW};
  color: ${WHITE};
  padding: 0.7rem 1.4rem;
  text-decoration: none;
  transition: 0.1s all;
  outline: none;
  border: none;

  &:hover {
    transform: translate(0, 2px);
    text-decoration: none;
    box-shadow: none;
  }
`;

export const ExternalButton = styled.a`
  background-color: ${BRIGHT_PURPLE};
  border-radius: 3px;
  box-shadow: ${BUTTON_SHADOW};
  color: ${WHITE};
  padding: 0.7rem 1.4rem;
  text-decoration: none;
  transition: 0.1s all;

  &:hover {
    transform: translate(0, 2px);
    text-decoration: none;
    box-shadow: none;
  }
`;

export default Button;
