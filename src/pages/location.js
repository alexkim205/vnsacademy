import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

const LocationContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const LocationPage = () => {
	const dirLink = "https://www.google.com/maps/dir//Vns+Academy,+3915+211th+St,+Bayside,+NY+11361/@40.764102,-73.7761097,17z/data=!4m16!1m6!3m5!1s0x89c261df8353420f:0xccf5caf3ec3097d8!2sVns+Academy!8m2!3d40.764102!4d-73.773921!4m8!1m0!1m5!1m1!1s0x89c261df8353420f:0xccf5caf3ec3097d8!2m2!1d-73.773921!2d40.764102!3e3";
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
      <SEO title="Location"/>
      <LocationContainer>
	      <Img
	      	fluid={data.logoImage.childImageSharp.fluid}
	      	alt="location"
	      	style={{
	      		width: "40rem",
	      	}}
	      />
      </LocationContainer>
    </Layout>
  );
};

export default LocationPage;