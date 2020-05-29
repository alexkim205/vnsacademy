import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { BACKGROUND_WHITE } from "../../constants/theme";

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6em 1.5em 7em 1.5em;
  padding-top: ${({ isFirst }) => (isFirst ? 6 : 1)}em;
  padding-bottom: ${({ isLast }) => (isLast ? 7 : 1)}em;
  font-size: 0.9em;
  line-height: 1.7em;
  box-sizing: border-box;
  background-color: ${BACKGROUND_WHITE};

  .title {
    text-align: center;
    max-width: 600px;
    line-height: 34px;
  }

  .content {
    max-width: 950px;
  }
`;

const BaseSection = ({ isFirst = true, isLast = true, ...otherProps }) => (
  <BaseContainer
    isFirst={isFirst}
    isLast={isLast}
    {...otherProps}
  ></BaseContainer>
);

BaseSection.propTypes = {
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

export default BaseSection;
