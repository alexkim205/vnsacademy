import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NoticeSection from "../components/sections/notice-section";
import CarouselSection from "../components/sections/carousel-section";
import StatsSection from "../components/sections/stats-section";
import ContainedSection from "../components/sections/contained-section";
import ProgramSection from "../components/sections/program-section";
import useCollegeImages from "../helpers/useCollegeImages";

import { generalStats, specificStats } from "../data/stats";
import { LIGHT_PURPLE } from "../constants/theme";

const IndexPage = () => {
  const title = "VnS Academy";
  const collegeImages = useCollegeImages();

  return (
    <Layout title={title}>
      <SEO title={title} />
      <NoticeSection>
        <h2 style={{ textAlign: "center", lineHeight: "2rem" }}>
          COVID-19 Update: Our physical center is now open for our students! In
          order to ensure the safety of our students and teachers:
        </h2>
        <ul>
          <li>
            All students must present his/her CDC vaccination card before the
            first day of class.
          </li>
          <li>
            All students and faculty must wear a mask at all times in the
            building.
          </li>
          <li>
            Body temperature will be checked every day before entering the
            classroom.
          </li>
        </ul>
      </NoticeSection>
      <ProgramSection />
      <CarouselSection
        title={"Our students have been accepted into"}
        items={collegeImages}
      />
      <StatsSection
        title={
          "Since 2001, we’ve helped all our students consistently score high on standardized tests.*"
        }
        items={generalStats}
        isLast={false}
      />
      <StatsSection
        title={"All SAT Subject Tests"}
        items={specificStats}
        isLast={false}
      />
      <ContainedSection
        isFirst={false}
        backgroundColor={LIGHT_PURPLE}
        align="center"
      >
        <i>*Median score</i>
      </ContainedSection>
    </Layout>
  );
};

export default IndexPage;
