import React, { useState, useRef } from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import _ from "lodash";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BaseSection from "./base.style";
import { BACKGROUND_WHITE, BREAKPOINTS } from "../../constants/theme";

const Container = styled(BaseSection)`
  background-color: ${({ backgroundColor }) => backgroundColor};

  .content {
    .carousel-title,
    .carousel-content {
      display: block;
      max-width: 950px;
      width: 100vw;

      .slick-slide {
        transition: all 0.5s;
        transform: scale(0.8);
      }

      .slick-center {
        transform: scale(1);
      }
    }

    .carousel-title {
      margin-top: 4em;
      margin-bottom: 2em;

      text-align: center;
      text-transform: uppercase;
      font-weight: 600;

      .slick-slide {
        opacity: 0;
      }

      .slick-center {
        opacity: 1;
      }

      .title {
        font-size: 2.1em;
        padding-top: 0.5em;
        margin-bottom: 0.4em;
      }
      .subtitle {
        font-size: 1.3em;
      }
    }
    .carousel-content {
      .item {
        text-align: center;
      }
    }
  }
`;

const CarouselSection = ({
  title,
  items,
  backgroundColor = BACKGROUND_WHITE,
  ...otherProps
}) => {
  const [titleSlider, setTitleSlider] = useState();
  const [contentSlider, setContentSlider] = useState();
  const [titleSliderRef, contentSliderRef] = [useRef(), useRef()];

  const settings = {
    infinite: true,
    centerMode: true,
    draggable: false,
    focusOnSelect: false,
    swipe: false,
    touchMove: false,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: _.zipWith(
      [BREAKPOINTS.l, BREAKPOINTS.m],
      [3, 1],
      (breakpoint, slidesToShow) => ({ breakpoint, settings: { slidesToShow } })
    ),
  };

  return (
    <Container backgroundColor={backgroundColor} {...otherProps}>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="content">
        <div className="carousel-title">
          <Slider
            {...settings}
            ref={ref => setTitleSlider(ref)}
            asNavFor={contentSlider}
          >
            {items &&
              items.map(({ name }, i) => (
                <div key={i} className="title">
                  {name}
                </div>
              ))}
          </Slider>
          <div className="subtitle">University</div>
        </div>
        <div className="carousel-content">
          <Slider
            {...settings}
            ref={ref => setContentSlider(ref)}
            asNavFor={contentSlider}
          >
            {items &&
              items.map(({ name, fixed }, i) => (
                <div className="item" key={i}>
                  <Img
                    imgStyle={{
                      objectFit: "contain",
                    }}
                    fixed={fixed}
                    alt={name}
                  />
                </div>
              ))}
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
      fixed: PropTypes.object,
    })
  ).isRequired,
  backgroundColor: PropTypes.string,
};

export default CarouselSection;
