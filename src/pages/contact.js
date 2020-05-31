import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";

const ContactPage = () => {
  return (
    <Layout title="Contact">
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
