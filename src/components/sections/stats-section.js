import React from "react";
import styled from "styled-components";

import BaseSection from "./base.style";
import { LIGHT_PURPLE } from "../../constants/theme";

const Container = styled(BaseSection)`
  background-color: ${LIGHT_PURPLE};
`;

const StatsSection = ({ title, items, children }) => (
  <Container>
    <h2>{title}</h2>
    <div className="content">{children}</div>
  </Container>
);

export default StatsSection;
