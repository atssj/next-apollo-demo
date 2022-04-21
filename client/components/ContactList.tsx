import React, { useState } from 'react';
import { Paper, SimpleGrid, Text, Button, Notification } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import {
  CONTACT_LIST_PAGE_SIZE,
  MAX_NUMBER_OF_CONTACTS
} from '../lib/constants';
import styles from '../styles/ContactList.module.css';
import ContactGrid from './ContactGrid';

export default function ContactList(props) {
  const [offset, setOffset] = useState(1);
  const [pageSize] = useState(CONTACT_LIST_PAGE_SIZE);
  const [cards, setCards] = useState([1]);
  const [hasMoreRecords, setHasMoreRecords] = useState(true);

  const handleLoadMoreRecords = () => {
    const numberOfRecords = (offset + 1) * CONTACT_LIST_PAGE_SIZE;

    if (numberOfRecords > MAX_NUMBER_OF_CONTACTS) {
      setHasMoreRecords(false);
      return false;
    }

    setOffset(offset + 1);
    setHasMoreRecords(true);
    const pages = new Array(offset + 1).fill(0).map((item, index) => index + 1);
    setCards(pages);
  };

  return (
    <>
      <div className={styles.center}>
        {hasMoreRecords ? (
          <Button color={'violet'} onClick={handleLoadMoreRecords}>
            <ChevronDown />
            Load another {pageSize} contacts
          </Button>
        ) : (
          <Notification color="red">No more records</Notification>
        )}
      </div>
      <Paper shadow="xs" p="md">
        <Text size="sm" pb={20} color="blue">
          Displayed {offset * pageSize} records.
        </Text>
        <SimpleGrid cols={3} spacing="sm">
          {Array.isArray(cards) &&
            cards.map((card) => (
              <ContactGrid key={card} offset={card}></ContactGrid>
            ))}
        </SimpleGrid>
      </Paper>
    </>
  );
}
