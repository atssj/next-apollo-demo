import Head from 'next/head';
import Link from 'next/link';

const ContactPage = () => (
  <>
    <Head>
      <title>My contacts | list</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      <h1>Contact list</h1>
      <br/><br/>
      <Link href="/"><a>Go Back</a></Link>
    </main>
  </>
);

export default ContactPage;
