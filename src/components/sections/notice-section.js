import React from "react";
import styled from "styled-components";

import BaseSection from "./base.style";
import { HIGHLIGHT_YELLOW } from "../../constants/theme";

const Container = styled(BaseSection)`
  background-color: ${HIGHLIGHT_YELLOW};
`;

const NoticeSection = ({ children }) => (
  <Container>
    <div className="content">{children}</div>
  </Container>
);

export default NoticeSection;
