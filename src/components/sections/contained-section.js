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
  padding: ${({ padding }) => padding};

  .content {
    width: 100%;
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

const ContainedSection = ({
  children,
  backgroundColor = null,
  align = "left",
  padding = "3em 1.5em",
  ...otherProps
}) => (
  <Container
    backgroundColor={backgroundColor}
    align={align}
    padding={padding}
    {...otherProps}
  >
    <div className="content">{children}</div>
  </Container>
);

ContainedSection.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  align: PropTypes.string,
};

export default ContainedSection;
