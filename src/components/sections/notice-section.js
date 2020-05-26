import React from "react";
import styled from "styled-components";

import BaseSection from "./base.style";
import {
  WHITE,
  DARK_PURPLE,
  HIGHLIGHT_YELLOW,
  BUTTON_SHADOW,
  breakpoint,
} from "../../constants/theme";

const Container = styled(BaseSection)`
  background-color: ${HIGHLIGHT_YELLOW};
`;

const NoticeSection = ({ children }) => (
  <Container>
    <div className="content">{children}</div>
  </Container>
);

export default NoticeSection;
