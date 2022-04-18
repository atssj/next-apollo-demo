import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Definitions

  type User {
    name: String!
  }

  type Contact {
    name: String!
    email: String!
    phoneNumber: String!
    address: String!
  }

  # type ContactResponse {
  #  contactlist: [Contact]
  #  next: Boolean
  # }

  # Queries

  type Query {
    User: User
    Contact: Contact
    # ContactList(count: Int, page: Int): ContactResponse
  }
`;
