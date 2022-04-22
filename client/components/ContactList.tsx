import type { FunctionComponent } from 'react';
import React, { useState } from 'react';
import {
  CONTACT_LIST_PAGE_SIZE,
  MAX_NUMBER_OF_CONTACTS
} from '../lib/constants';
import styles from '../styles/ContactList.module.css';
import ContactGrid from './ContactGrid';
import LoadMoreButton from './LoadMoreButton';

const ContactList: FunctionComponent = () => {
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
      <p className={styles.center}>
        {hasMoreRecords ? (
          <LoadMoreButton
            label={`Load another ${pageSize} contacts`}
            onClick={handleLoadMoreRecords}
          ></LoadMoreButton>
        ) : (
          <p className="text-xl red-600">No more records</p>
        )}
      </p>
      <section>
        <p className="text-sm text-blue-700">
          Displayed {offset * pageSize} records.
        </p>
        <ul className="py-5 grid gap-4 grid-cols-4">
          {Array.isArray(cards) &&
            cards.map((card) => (
              <ContactGrid key={card} offset={card}></ContactGrid>
            ))}
        </ul>
      </section>
    </>
  );
};

export default ContactList;
