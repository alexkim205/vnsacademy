import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NoticeSection from "../components/sections/notice-section";
import CarouselSection from "../components/sections/carousel-section";
import useCollegeData from "../helpers/useCollegeData";

const IndexPage = () => {
  const title = "VnS Academy";
  const collegesData = useCollegeData();

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
        items={collegesData}
      />
    </Layout>
  );
};

export default IndexPage;
