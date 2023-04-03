import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

const ContactPage = (props) => {
  return (
    <>
      <Head>
        <title>Conntact</title>
        <meta name="description" content="envoi ton message sur cette page" />
      </Head>
      <ContactForm />;
    </>
  );
};

export default ContactPage;
