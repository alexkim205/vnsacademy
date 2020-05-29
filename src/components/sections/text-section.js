import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import BaseSection from "./base.style";

const Container = styled(BaseSection)`
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
  padding: 3em 1.5em;

  .content {
    font-family: "Poppins", sans-serif;
    ${({ align }) =>
      align &&
      css`
        text-align: ${align};
      `}

    i {
      font-size: 0.8em;
    }
  }
`;

const TextSection = ({
  children,
  backgroundColor = null,
  align = "left",
  ...otherProps
}) => (
  <Container backgroundColor={backgroundColor} align={align} {...otherProps}>
    <div className="content">{children}</div>
  </Container>
);

TextSection.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  align: PropTypes.string,
};

export default TextSection;
