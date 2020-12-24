import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ClassesSection from "../components/sections/classes-section";
import HighlightSection from "../components/sections/highlight-section";

const ClassesPage = () => {
  return (
    <Layout title="Classes">
      <SEO title="Classes" />
      <HighlightSection light>
        <span className="highlight">
          Register now for our{" "}
          <Link to={"/programs/spring-program-2021"}>2021 Spring Program</Link>{" "}
          (starts January 29, 2021). <br />
          Early Bird Registration by January 9, 2021.
        </span>
      </HighlightSection>
      <ClassesSection />
    </Layout>
  );
};

export default ClassesPage;
