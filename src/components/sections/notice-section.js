import React from "react";
import styled from "styled-components";

import BaseSection from "./base.style";
import { HIGHLIGHT_YELLOW } from "../../constants/theme";

const Container = styled(BaseSection)`
  font-family: "Poppins", sans-serif;
  background-color: ${HIGHLIGHT_YELLOW};
  padding: 3em 1.5em;
`;

const NoticeSection = ({ children, ...otherProps }) => (
  <Container {...otherProps}>
    <div className="content">{children}</div>
  </Container>
);

export default NoticeSection;
