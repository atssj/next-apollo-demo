import type { FunctionComponent } from 'react';
import type { TContact } from '../types/Contact';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { gql, useQuery } from '@apollo/client';
import { client } from '../lib/apollo-client';

type Props = {
  offset: number;
};

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

  const { data, loading, error } = useQuery(CONTACT_LIST, {
    client,
    variables: {
      offset
    }
  });

  const ContactCard = dynamic(() => import('./ContactCard'), {
    suspense: true
  });

  if (error) {
    return <p className="text-2xl red-600">Something went wrong!</p>;
  }

  return (
    <Suspense fallback={<p className="text-2xl blue-600">Loading...</p>}>
      {data &&
        data.ContactList.Contacts.map((contact: TContact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
    </Suspense>
  );
};

export default ContactGrid;
