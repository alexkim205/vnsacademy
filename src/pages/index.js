import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NoticeSection from "../components/sections/notice-section";
import CarouselSection from "../components/sections/carousel-section";
import StatsSection from "../components/sections/stats-section";
import ContainedSection from "../components/sections/contained-section";
import useCollegeImages from "../helpers/useCollegeImages";

import { generalStats, specificStats } from "../data/stats";
import { LIGHT_PURPLE } from "../constants/theme";

import { getClassSchedule } from "../helpers/dataUtils";

const IndexPage = () => {
  const title = "VnS Academy";
  const collegeImages = useCollegeImages();

  console.log("DATA UTIL TEST");
  console.log(getClassSchedule("sat"));

  return (
    <Layout title={title}>
      <SEO title={title} />
      <NoticeSection>
        Due to COVID-19, we’ve closed our physical center in Bayside. For the
        health and safety of our students and teachers, we are providing video
        tutoring sessions for individual and group classes. Thank you for your
        understanding and please stay safe.
      </NoticeSection>
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
