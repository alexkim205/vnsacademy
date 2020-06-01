import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { WHITE, DARK_PURPLE } from "../constants/theme";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 12em 1.5em 6em 1.5em;
  background-color: ${DARK_PURPLE};
  font-family: "Poppins", sans-serif; 
  font-size: 0.8em;
  box-sizing: border-box;
  color: ${WHITE};

  .contact { 
    font-weight: 300;
    margin-bottom: 2em;
    text-align: center;
    line-height: 2em;
  }
  .copyright {
    font-weight: 500;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Container>
      <div className="contact">
        vnsacademy@gmail.com<br />
        (718) 888-0671<br />
      </div>
      <Img fixed={data.file.childImageSharp.fixed} />
      <div className="copyright"><br />2001-2020 © VnS Academy </div>
    </Container>
  );
};

export default Footer;
