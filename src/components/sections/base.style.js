import styled from "styled-components";

const BaseSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3em 1.5em;
  font-size: 0.9em;
  line-height: 1.7em;
  box-sizing: border-box;

  .content {
    max-width: 950px;
  }
`;

export default BaseSection;
