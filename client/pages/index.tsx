import Head from 'next/head';
import Name from '../components/Name';
import { Title } from '@mantine/core';

const LandingPage = () => (
  <>
    <Head>
      <title>My contacts | landing</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div>
      <Title order={5} ml={10}>
        <Name />
      </Title>
    </div>
  </>
);

export default LandingPage;
