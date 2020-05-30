import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import ContainedSection from "../components/sections/contained-section";

const ClassTemplate = ({ data }) => {
  const { classData, scheduleData } = data.allSitePage.edges[0].node.context;

  console.log(classData, scheduleData);

  return (
    <Layout title={classData.name}>
      <SEO title={classData.name} />
      <ContainedSection>
        <Infobox classData={classData} />
      </ContainedSection>
    </Layout>
  );
};

export default ClassTemplate;

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            classData {
              key
              name
              path
              category
              startDate
              endDate
              type
              numSessions
              subjects {
                name
                key
              }
            }
            scheduleData {
              M {
                name
                key
                duration
              }
              T {
                name
                key
                duration
              }
              W {
                name
                key
                duration
              }
              Th {
                name
                key
                duration
              }
              F {
                name
                key
                duration
              }
            }
          }
        }
      }
    }
  }
`;
