import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Title, Container } from '@mantine/core';
import { ChevronLeft } from 'tabler-icons-react';

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>My contacts | about</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      <Link href="/" passHref>
        <Button variant="light">
          <ChevronLeft />
          Back
        </Button>
      </Link>
      <Container>
        <Title>About page</Title>
      </Container>
    </main>
  </>
);

export default AboutPage;
