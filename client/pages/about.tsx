import Head from 'next/head'
import Link from 'next/link'
import { Button, Title, Container } from '@mantine/core';
import { ChevronLeft } from 'tabler-icons-react';

export default () => (
  <>
    <Head>
      <title>My contacts | about</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      <Link href="/">
        <Button variant="light">
          <ChevronLeft/>Back
        </Button>
      </Link>
      <Container>
        <Title>About page</Title>
      </Container>
    </main>
  </>
)
