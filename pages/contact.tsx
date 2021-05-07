import Footer from "@components/footer";
import Header from "@components/header";
import Helmet from "@components/helmet";
import { useState } from "react";

import { post } from "../util/http";

const metadata = {
  title: "Next Template Vulcan: Contact",
  description: "Your description",
  canonical: "https://vulcanca.com",
  imageAlt: "imageAlt",
  data1: "2 minutes",
};

const Contact = () => {
  const [showContactSuccess, setShowContactSuccess] = useState(false);
  const [validation, setValidation] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // starting here. Maybe just toggle a class?
    setLoading(true);

    // parse form data as JSON object
    const url = "/api/contact";
    const data = Object.fromEntries(new FormData(e.target).entries());

    // send form data to API and check results
    post({ url, data }).then((response) => {
      const { ok, validation } = response;
      setValidation(validation);
      setSuccess(ok);

      if (ok) {
        setShowContactSuccess(true);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  };

  return (
    <>
      <Helmet data={metadata} />
      <Header />
      <div>
        <h1>Contact</h1>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
