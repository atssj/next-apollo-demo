import type { NextPage } from 'next';
import Head from 'next/head';
import BackButton from '../components/BackButton';

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>My contacts | about</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <BackButton />
    <h1 className="text-3xl mt-3">About page</h1>
  </>
);

export default AboutPage;
