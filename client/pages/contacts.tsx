import Head from 'next/head';
import Link from 'next/link';
import { Container, Button, Title } from '@mantine/core';
import { ChevronLeft } from 'tabler-icons-react';
import ContactList from '../components/ContactList';

const ContactPage = () => (
  <>
    <Head>
      <title>My contacts | list</title>
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
        <Title>Contact list</Title>
        <br />
        <ContactList />
      </Container>
    </main>
  </>
);

export default ContactPage;
