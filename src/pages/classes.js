import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { HIGHLIGHT_YELLOW, BLACK, DARK_PURPLE } from "../constants/theme";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ClassesSection from "../components/sections/classes-section";
import ContainedSection from "../components/sections/contained-section";

const HighlightSection = styled(ContainedSection)`
  background-color: ${HIGHLIGHT_YELLOW};

  .content {
    text-align: center;

    .highlight {
      font-size: 1.5em;
      font-weight: 500;

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

const ClassesPage = () => {
  return (
    <Layout title="Classes">
      <SEO title="Classes" />
      <HighlightSection>
        <span className="highlight">
          Register now for our{" "}
          <Link to={"/programs/summer-program-2020"}>2020 Summer Program</Link>{" "}
          (July 1 - August 14, 2020).
        </span>
      </HighlightSection>
      <ClassesSection />
    </Layout>
  );
};

export default ClassesPage;
