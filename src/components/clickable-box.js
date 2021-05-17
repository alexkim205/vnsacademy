import React from "react";
import styled from "styled-components";
import { BOX_SHADOW, BOX_SHADOW_HOVER, DARK_PURPLE } from "../constants/theme";

const Container = styled.div`
  border-radius: 5px;
  box-shadow: ${BOX_SHADOW};
  text-align: ${({ textAlign }) => textAlign};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
  display: flex;

  a.link {
    padding: 2em;
    width: 100%;
    text-decoration: none;
    color: ${DARK_PURPLE};

    &:hover {
      text-decoration: underline;
    }
  }

  &:hover {
    transform: translate3d(0px, -1px, 0px);
    box-shadow: ${BOX_SHADOW_HOVER};
  }
`;

const ClickableBox = ({
  children,
  href,
  textAlign = "left",
  ...otherProps
}) => {
  return (
    <Container textAlign={textAlign} {...otherProps}>
      <a className="link" href={href} target="_blank">
        {children}
      </a>
    </Container>
  );
};

export default ClickableBox;
