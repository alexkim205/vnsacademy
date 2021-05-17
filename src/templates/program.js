import React from "react";
import { graphql } from "gatsby";
import _ from "lodash";

import { ENROLL_REASONS } from "../constants/contactReasons";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Infobox from "../components/class-infobox";
import ContainedSection from "../components/sections/contained-section";
import ButtonSection from "../components/sections/button-section";
import Schedule from "../components/schedule";
import ClickableBox from "../components/clickable-box";

const ProgramTemplate = ({ data }) => {
  const { programData, scheduleData } = data.allSitePage.edges[0].node.context;
  const colorMap = _.map(programData.subjects, s => s.key);
  // const isPrivate = programData.key.startsWith("private");
  const buttons = [
    {
      message: "Interested in enrolling?",
      buttonTitle: "Reserve your spot now",
      link: "/contact",
      routerState: { reason: ENROLL_REASONS.GROUP },
    },
    {
      message: "Want a private tutor?",
      buttonTitle: "Contact us",
      link: "/contact",
      routerState: { reason: ENROLL_REASONS.PRIVATE },
    },
  ];

  console.log("ProgramData", programData);
  return (
    <Layout title={programData.name}>
      <SEO title={programData.name} />
      <ContainedSection padding="3em 1.5em 0 1.5em">
        <ClickableBox textAlign="center" href={programData.imageUrl}>
          <h2>Download the full schedule.</h2>
        </ClickableBox>
      </ContainedSection>
      <ContainedSection>
        <Infobox data={programData} widths={["65%", "35%"]} />
      </ContainedSection>
      <ContainedSection>
        <Schedule scheduleData={scheduleData} colorMap={colorMap} />
      </ContainedSection>
      <ButtonSection buttons={buttons} />
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
              type
              imageUrl
              subjects {
                name
                key
              }
            }
            scheduleData {
              Sun {
                name
                key
                duration
                startTime
                endTime
              }
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
              Sat {
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
