import styled from "styled-components";
import ContainedSection from "./contained-section";
import {
  HIGHLIGHT_YELLOW,
  BLACK,
  DARK_PURPLE,
  LIGHT_PURPLE,
} from "../../constants/theme";

const HighlightSection = styled(ContainedSection)`
  background-color: ${({ light }) => (light ? LIGHT_PURPLE : HIGHLIGHT_YELLOW)};

  .content {
    text-align: center;

    .highlight {
      font-size: 1.5em;
      font-weight: 500;
      line-height: 2.3rem;

      a {
        color: ${DARK_PURPLE};

        &:focused,
        &:visited {
          color: ${BLACK};
        }
      }
    }
  }
`;

export default HighlightSection;
