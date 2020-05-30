import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactSection from "../components/sections/contact-section";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <SEO title="Contact" />
      <ContactSection />
    </Layout>
  );
};

export default ContactPage;