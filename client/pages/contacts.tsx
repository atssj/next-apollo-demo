import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@mantine/core';
import { ChevronLeft } from 'tabler-icons-react';

const ContactPage = () => (
  <>
    <Head>
      <title>My contacts | list</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      <Link href="/">
        <Button variant="light">
          <ChevronLeft/>Back
        </Button>
      </Link>
      <h1>Contact list</h1>
    </main>
  </>
);

export default ContactPage;
