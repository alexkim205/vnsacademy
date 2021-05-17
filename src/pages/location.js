import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ExternalButton } from "../components/button";
import ContainedSection from "../components/sections/contained-section";
import { breakpoint, BOX_SHADOW } from "../constants/theme";

const dirLink = "https://goo.gl/maps/kXpRAXkyMMAevK7a7";

const LocationContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin-top: 2em;
  margin-bottom: 3em;

  ${breakpoint.down("s_m")`
		flex-direction: column;
	`}
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  height: 100%;
  box-sizing: border-box;
  box-shadow: ${BOX_SHADOW};
  min-width: 250px;
  margin-left: 2em;
  height: 100%;
  padding: 2em;
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;
  z-index: 2;

  p {
    line-height: 1.7em;
    font-size: 0.92em;
  }

  h3.location-title {
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0;
  }
  .oppositeAlign {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-align: center;
  }

  ${breakpoint.down("s_m")`
    margin-top: 2.5em;
		margin-left: 0;
		width: 100%;
	`}
`;

const LocationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "vns-location.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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
              borderRadius: "5px",
              boxShadow: BOX_SHADOW,
            }}
          />
          <InfoBox>
            <h3 className="location-title">Address</h3>
            <p>
              VnS Academy
              <br />
              217-04 Northern Blvd. FL 2, #6 & 8<br />
              Bayside, NY 11361
            </p>
            <ExternalButton href={dirLink} active="active" target="_blank">
              Get Directions
            </ExternalButton>
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
      </ContainedSection>
    </Layout>
  );
};

export default LocationPage;
