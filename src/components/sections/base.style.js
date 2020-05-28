import styled from "styled-components";

import { BACKGROUND_WHITE } from "../../constants/theme";

const BaseSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6em 1.5em 7em 1.5em;
  font-size: 0.9em;
  line-height: 1.7em;
  box-sizing: border-box;
  background-color: ${BACKGROUND_WHITE};

  .content {
    max-width: 950px;
  }
`;

export default BaseSection;
