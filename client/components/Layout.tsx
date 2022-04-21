import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppShell,
  Navbar,
  Header,
  Text,
  Title,
  Box,
  MediaQuery,
  Burger,
  useMantineTheme
} from '@mantine/core';
import { Home, AddressBook, InfoCircle } from 'tabler-icons-react';

export default function Layout({ children }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200 }}
          >
            <Link href="/contacts" passHref>
              <Box sx={{ display: 'flex' }}>
                <AddressBook />
                <Title order={5} ml={10}>
                  Contacts
                </Title>
              </Box>
            </Link>
            <Link href="/about" passHref>
              <Box sx={{ display: 'flex' }}>
                <InfoCircle />
                <Title order={5} ml={10}>
                  About
                </Title>
              </Box>
            </Link>
          </Navbar>
        }
        header={
          <Header
            height={60}
            p="xs"
            sx={(theme) => ({
              backgroundColor: theme.colors.blue[9],
              color: 'white'
            })}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[3]}
                  mr="xl"
                />
              </MediaQuery>
              <Home />
              <Text ml={10} size="md">
                My contacts app
              </Text>
            </div>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colors.gray[0]
          }
        })}
      >
        {children}
      </AppShell>
    </>
  );
}
