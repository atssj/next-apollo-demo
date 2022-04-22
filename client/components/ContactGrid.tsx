import type { FunctionComponent } from 'react';
import { lazy } from 'react';
import type { TContact } from '../types/Contact';
import { gql, useQuery } from '@apollo/client';
import { client } from '../lib/apollo-client';

type Props = {
  offset: number;
};

const ContactCard = lazy(() => import('./ContactCard'));

const ContactGrid: FunctionComponent<Props> = ({ offset }) => {
  const CONTACT_LIST = gql`
    query ContactList($offset: Int) {
      ContactList(offset: $offset) {
        Contacts {
          id
          name
          email
          address
          phoneNumber
        }
        PageInfo {
          numberOfPages
          hasNext
        }
      }
    }
  `;

  const { data } = useQuery(CONTACT_LIST, {
    client,
    variables: {
      offset
    }
  });

  return (
    <>
      {data &&
        data.ContactList.Contacts.map((contact: TContact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
    </>
  );
};

export default ContactGrid;
