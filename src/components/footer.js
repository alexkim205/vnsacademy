import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { WHITE, DARKEST_PURPLE } from "../constants/theme";
import { emailAddress } from "../components/contact-form";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10em 1.5em 6em 1.5em;
  background-color: ${DARKEST_PURPLE};
  font-family: "Poppins", sans-serif;
  font-size: 0.8em;
  box-sizing: border-box;
  color: ${WHITE};

  a {
    color: ${WHITE};
    &:focused, &:visited {
      color: ${WHITE};
    }
  }

  .contact {
    font-weight: 300;
    margin-bottom: 2em;
    margin-top: 0.3em;
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
      <Img fixed={data.file.childImageSharp.fixed} />
      <div className="contact">
        <a href={`mailto:${emailAddress}`}>vnsacademy@gmail.com</a>
        <br />
        (718) 888-0671
        <br />
      </div>
      <div className="copyright">
        <br />
        2001-2020 © VnS Academy{" "}
      </div>
    </Container>
  );
};

export default Footer;
