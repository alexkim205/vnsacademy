import React from "react";

import colleges from "../data/colleges";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import NoticeSection from "../components/sections/notice-section";
import CarouselSection from "../components/sections/carousel-section";

const IndexPage = () => {
  const title = "VnS Academy";

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
        items={colleges}
      />
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};

export default IndexPage;
