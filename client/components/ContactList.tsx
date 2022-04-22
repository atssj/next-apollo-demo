import type { FunctionComponent } from 'react';
import { lazy, useState, Suspense } from 'react';
import {
  CONTACT_LIST_PAGE_SIZE,
  MAX_NUMBER_OF_CONTACTS
} from '../lib/constants';
import styles from '../styles/ContactList.module.css';
import Loader from './Loader';

const LoadMoreButton = lazy(() => import('./LoadMoreButton'));
const ContactGrid = lazy(() => import('./ContactGrid'));

const ContactList: FunctionComponent = () => {
  const [offset, setOffset] = useState(1);
  const [pageSize] = useState(CONTACT_LIST_PAGE_SIZE);
  const [cards, setCards] = useState([1]);
  const [hasMoreRecords, setHasMoreRecords] = useState(true);

  const handleLoadMoreRecords = async () => {
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
        <p className="text-sm text-blue-700 pb-5">
          Displayed {offset * pageSize} records.
        </p>
        <Suspense fallback={<Loader />}>
          <ul className={styles.contactList}>
            {Array.isArray(cards) &&
              cards.map((card) => (
                <ContactGrid key={card} offset={card}></ContactGrid>
              ))}
          </ul>
        </Suspense>
      </section>
    </>
  );
};

export default ContactList;
