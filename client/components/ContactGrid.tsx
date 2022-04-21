import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { gql, useQuery } from '@apollo/client';
import { Loader, Alert } from '@mantine/core';
import { client } from '../lib/apollo-client';

export default function ContactGrid({ offset }) {
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

  if (loading) {
    return;
  }

  if (error) {
    return (
      <Alert title="Error" color="red">
        Something went wrong.
      </Alert>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      {data.ContactList.Contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </Suspense>
  );
}
