import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BaseSection from "../components/sections/base.style"
import Button from "../constants/button";
import ContainedSection from "../components/sections/contained-section";
import { 
	breakpoint,
	WHITE,
	BRIGHT_PURPLE,
	BUTTON_SHADOW
} from "../constants/theme";

const LocationContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: stretch;
	padding: 2em;

  ${breakpoint.down("m")`
		flex-direction: column;
		padding: 1.5em;
	`}
`

const AddressBox = styled.div`
  font-family: "Poppins", sans-serif;
  width: 40%;
  height: 100%;
  padding: 1em;
	.title {
		font-weight: bold;
		&:first-child {
			margin-top: 0.5em;
		}
	}
	.oppositeAlign {
		display: flex;
		justify-content: space-between;
	}

  ${breakpoint.down("m")`
		width: 100%;
	`}
`;

const ButtonContainer = styled(BaseSection)`
	padding: 1em;
	margin-bottom: 1em;
	a {
	  background-color: ${BRIGHT_PURPLE};
	  border-radius: 3px;
	  box-shadow: ${BUTTON_SHADOW};
	  color: ${WHITE};
	  padding: 1rem 2rem;
		text-decoration: none;
		transition: 0.1s all;

	  &:hover {
	    transform: translate(0, 1px);
	    text-decoration: none;
	    box-shadow: none;
	  }
	}
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
      <ContainedSection>
	      <LocationContainer>
		      <Img
		      	fluid={data.logoImage.childImageSharp.fluid}
		      	alt="location"
		      	style={{
		      		width: "100%",
		      		height: "100%",
		      		margin: "1.5em"
		      	}}
		      />
		      <AddressBox>
		      	<p className="title">Address</p>
		      	<p>VnS Academy<br />
		      		211-63 46th Ave FL 1<br />
		      		Queens, NY<br />
		      		11361
	      		</p>
		      	<p className="title">Hours</p>
		      	<div className="oppositeAlign">
			      	<div>MTWThF</div>
		      		<div>8AM - 5PM</div>	
		      	</div>
		      	<div className="oppositeAlign">
			      	<div>Sat+Sun</div>
			      	<div>10AM - 7PM</div>
			      </div>
		      </AddressBox>
	      </LocationContainer>
	      <ButtonContainer>
		      <a href={dirLink} active="active">
		    		Get Directions
		  		</a>
	  		</ButtonContainer>
  		</ContainedSection>
    </Layout>
  );
};

export default LocationPage;