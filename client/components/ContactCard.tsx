import React from 'react';
import { Paper, Text } from '@mantine/core';

const ContactCard = ({ contact }) => {
  return (
    <Paper
      shadow="sm"
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        '&:hover': {
          backgroundColor: theme.colors.gray[1]
        }
      })}
    >
      <Text weight={500}>{contact.name}</Text>
      <Text>{contact.email}</Text>
      <Text>{contact.address}</Text>
      <Text>{contact.phoneNumber}</Text>
    </Paper>
  );
};

export default ContactCard;
