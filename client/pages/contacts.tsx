import Head from 'next/head';
import BackButton from '../components/BackButton';
import ContactList from '../components/ContactList';

const ContactPage = () => (
  <>
    <Head>
      <title>My contacts | list</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <BackButton />
    <h1 className="text-3xl mt-3">Contact list</h1>
    <ContactList />
  </>
);

export default ContactPage;
