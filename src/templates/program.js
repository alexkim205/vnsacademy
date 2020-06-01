import React from "react";
import { graphql } from "gatsby";
import _ from "lodash";

import { REASONS } from "../constants/contactReasons";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import ContainedSection from "../components/sections/contained-section";
import ButtonSection from "../components/sections/button-section";
import Schedule from "../components/schedule";

const ProgramTemplate = ({ data }) => {
  console.log(data);
  const { programData, scheduleData } = data.allSitePage.edges[0].node.context;
  const colorMap = _.map(programData.subjects, s => s.key);
  // const isPrivate = programData.key.startsWith("private");
  const buttons = [
    {
      message: "Interested in enrolling?",
      buttonTitle: "Reserve your spot now",
      link: "/contact",
      routerState: { reason: REASONS.GROUP },
    },
    {
      message: "Want a private tutor?",
      buttonTitle: "Contact us",
      link: "/contact",
      routerState: { reason: REASONS.PRIVATE },
    },
  ];
  return (
    <Layout title={programData.name}>
      <SEO title={programData.name} />
      <ContainedSection>
        <Infobox data={programData} />
      </ContainedSection>
      <ButtonSection buttons={buttons} />
      <ContainedSection>
        <Schedule scheduleData={scheduleData} colorMap={colorMap} />
      </ContainedSection>
    </Layout>
  );
};

export default ProgramTemplate;

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            programData {
              key
              name
              path
              category
              startDate
              endDate
              subjects
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
