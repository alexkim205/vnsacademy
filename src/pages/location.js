import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BaseSection from "../components/sections/base.style";
import { ExternalButton } from "../components/button";
import ContainedSection from "../components/sections/contained-section";
import { breakpoint } from "../constants/theme";

const dirLink = "https://goo.gl/maps/kXpRAXkyMMAevK7a7";

const LocationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin-top: 2em;

  ${breakpoint.down("s_m")`
		flex-direction: column;
	`}
`;

const InfoBox = styled.div`
  font-family: "Poppins", sans-serif;
  width: 30%;
  margin-left: 2em;
  height: 100%;
  padding: 1em 0;
  box-sizing: border-box;

  p {
    line-height: 1.7em;
  }

  h3.location-title {
    font-weight: 500;
    // &:first-child {
    //   margin-top: 0.5em;
    // }
  }
  .oppositeAlign {
    display: flex;
    justify-content: space-between;
  }

  ${breakpoint.down("s_m")`
		margin-left: 0;
		width: 100%;
	`}
`;

const ButtonContainer = styled(BaseSection)`
  padding: 1em;
  margin: 4em 0 2em 0;
`;

const LocationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "vnsLocation.png" }) {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout title="Location">
      <SEO title="Location" />
      <ContainedSection>
        <LocationContainer>
          <Img
            fluid={data.logoImage.childImageSharp.fluid}
            alt="location"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <InfoBox>
            <h3 className="location-title">Address</h3>
            <p>
              VnS Academy
              <br />
              211-63 46th Ave FL 1<br />
              Bayside, NY
              <br />
              11361
            </p>
            {/* <h3 className="title">Hours</h3>
            <div className="oppositeAlign">
              <div>M T W Th F</div>
              <div>8AM - 5PM</div>
            </div>
            <div className="oppositeAlign">
              <div>Sat + Sun</div>
              <div>10AM - 7PM</div>
            </div> */}
          </InfoBox>
        </LocationContainer>
        <ButtonContainer>
          <ExternalButton href={dirLink} active="active" target="_blank">
            Get Directions
          </ExternalButton>
        </ButtonContainer>
      </ContainedSection>
    </Layout>
  );
};

export default LocationPage;
