import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";

import { HIRING_REASONS, HIRING_SUBJECTS } from "../constants/contactReasons";

const ContactHirePage = ({ location }) => {
  return (
    <Layout title="Work With Us">
      <SEO title="Contact-Hire" />
      <ContactForm
        reason={location?.state?.reason}
        reasons={HIRING_REASONS}
        subjects={HIRING_SUBJECTS}
        isContactPage={false}
      />
    </Layout>
  );
};

export default ContactHirePage;
