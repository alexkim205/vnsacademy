import React, { useState, useEffect, Fragment } from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import _ from "lodash";
import Slider from "react-slick";
import anime from "animejs";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BaseSection from "./base.style";
import { WHITE, BREAKPOINTS } from "../../constants/theme";

const Container = styled(BaseSection)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding-top: 6em;
  padding-bottom: 6em;

  .content {
    .carousel-title {
      margin-top: 5em;
      margin-bottom: 2em;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
      .title {
        font-size: 2.1em;
        margin-bottom: 0.4em;
      }
      .subtitle {
        font-size: 1.3em;
      }
    }
    .carousel-content {
      max-width: 950px;
      width: 100vw;
      display: block;

      .slick-slide {
        transition: all 0.5s;
        transform: scale(0.8);
      }

      .slick-center {
        transform: scale(1);
      }

      .item {
        text-align: center;
      }
    }
  }
`;

const CarouselSection = ({ title, items, backgroundColor = WHITE }) => {
  const [active, setActive] = useState(0);

  console.log(active, items);

  return (
    <Container backgroundColor={backgroundColor}>
      <h2>{title}</h2>
      <div className="content">
        <div className="carousel-title">
          <div className="title">Placeholder</div>
          <div className="subtitle">University</div>
        </div>
        <div className="carousel-content">
          <Slider
            infinite
            centerMode
            arrows={false}
            autoplay
            autoplaySpeed={2000}
            slidesToShow={3}
            responsive={[
              {
                breakpoint: BREAKPOINTS.l,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: BREAKPOINTS.m,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: BREAKPOINTS.s,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {items &&
              items.map(({ name, fixed }, i) => (
                <div className="item">
                  <Img
                    imgStyle={{
                      objectFit: "contain",
                    }}
                    fixed={fixed}
                    alt={name}
                  />
                </div>
              ))}
            {/* <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div> */}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

CarouselSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
    })
  ).isRequired,
  backgroundColor: PropTypes.string,
};

export default CarouselSection;
