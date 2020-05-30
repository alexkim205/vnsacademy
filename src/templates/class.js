import React from "react";
import { graphql } from "gatsby";
import _ from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import ContainedSection from "../components/sections/contained-section";
import Schedule from "../components/schedule";

const ClassTemplate = ({ data }) => {
  const { classData, scheduleData } = data.allSitePage.edges[0].node.context;
  const colorMap = _.map(classData.subjects, s => s.key);

  return (
    <Layout title={classData.name}>
      <SEO title={classData.name} />
      <ContainedSection>
        <Infobox classData={classData} />
      </ContainedSection>
      <ContainedSection>
        <Schedule scheduleData={scheduleData} colorMap={colorMap} />
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
                startTime
                endTime
              }
              T {
                name
                key
                duration
                startTime
                endTime
              }
              W {
                name
                key
                duration
                startTime
                endTime
              }
              Th {
                name
                key
                duration
                startTime
                endTime
              }
              F {
                name
                key
                duration
                startTime
                endTime
              }
            }
          }
        }
      }
    }
  }
`;
