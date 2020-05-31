import styled from "styled-components";
import { Link } from "gatsby";

import { WHITE, BRIGHT_PURPLE, BUTTON_SHADOW } from "../constants/theme";

const ButtonBaseStyle = `
  background-color: ${BRIGHT_PURPLE};
  border-radius: 3px;
  box-shadow: ${BUTTON_SHADOW};
  color: ${WHITE};
  padding: 0.7rem 1.4rem;
  text-decoration: none;
  transition: 0.1s all;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    transform: translate(0, 2px);
    text-decoration: none;
    box-shadow: none;
  }
`;

const Button = styled(Link)`
  ${ButtonBaseStyle}
`;

export const FormButton = styled.button`
  ${ButtonBaseStyle}
  outline: none;
  border: none;
`;

export const ExternalButton = styled.a`
  ${ButtonBaseStyle}
`;

export default Button;
