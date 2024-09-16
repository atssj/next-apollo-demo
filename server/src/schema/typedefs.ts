import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Definitions

  type User {
    name: String!
  }

  type Contact {
    id: Int!
    name: String!
    email: String!
    phoneNumber: String!
    address: String!
  }

  type PageInfo {
    numberOfPages: Int,
    hasNext: Boolean
  }

  type ContactList {
    Contacts: [Contact],
    PageInfo: PageInfo
  }

  # Queries

  type Query {
    User: User
    ContactList(offset: Int): ContactList
  }
`;
