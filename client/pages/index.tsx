import type { FunctionComponent } from 'react';
import Head from 'next/head';
import Name from '../components/Name';

const LandingPage: FunctionComponent = () => (
  <>
    <Head>
      <title>My contacts | landing</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Name />
  </>
);

export default LandingPage;
