import styled from "styled-components";
import { Link } from "gatsby";

import { WHITE, BRIGHT_PURPLE, BUTTON_SHADOW } from "../constants/theme";

const Button = styled(Link)`
  background-color: ${BRIGHT_PURPLE};
  border-radius: 3px;
  box-shadow: ${BUTTON_SHADOW};
  color: ${WHITE};
  padding: 1rem 2rem;
  text-decoration: none;
  transition: 0.1s all;

  &:hover {
    transform: translate(0, 1px);
    text-decoration: none;
    box-shadow: none;
  }
`;

export default Button;
