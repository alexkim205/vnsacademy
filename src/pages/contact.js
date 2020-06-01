import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";

const ContactPage = ({ location }) => {
  console.log(location)
  return (
    <Layout title="Contact Us">
      <SEO title="Contact" />
      <ContactForm reason={location?.state?.reason} />
    </Layout>
  );
};

export default ContactPage;
