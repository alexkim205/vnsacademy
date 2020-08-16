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

const ClassTemplate = ({ data }) => {
  const { classData, scheduleData } = data.allSitePage.edges[0].node.context;
  const colorMap = _.map(classData.subjects, s => s.key);
  const isPrivate = classData.type.startsWith("Individual");
  const buttons = isPrivate
    ? [
        {
          message: "Interested? Contact us for a quote.",
          buttonTitle: "Contact us",
          link: "/contact",
          routerState: { reason: ENROLL_REASONS.PRIVATE },
        },
      ]
    : [
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
  return (
    <Layout title={classData.name}>
      <SEO title={classData.name} />
      <ContainedSection>
        <Infobox data={classData} />
      </ContainedSection>
      <ContainedSection>
        <Schedule scheduleData={scheduleData} colorMap={colorMap} />
      </ContainedSection>
      <ButtonSection buttons={buttons} />
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
              Sun {
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
