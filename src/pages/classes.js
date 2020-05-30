import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ClassesSection from "../components/sections/classes-section";

const ClassesPage = () => {
  return (
    <Layout title="Classes">
      <SEO title="Classes" />
      <ClassesSection/>
    </Layout>
  );
};

export default ClassesPage;
