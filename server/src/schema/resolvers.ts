import casual from 'casual';
import { MAX_NUMBER_OF_CONTACTS, CONTACTS_PER_PAGE } from './../constants';

export const resolvers = {
  Query: {
    User() {
      return {
        name: casual.full_name
      };
    },
    Contact() {
      return {
        name: casual.full_name,
        email: casual.email,
        phoneNumber: casual.phone,
        address: casual.address
      }
    }
  }
  /*,
  ContactList(parent: any, { count = MAX_NUMBER_OF_CONTACTS, page = 1 }) {
    const ContactList = new Array(count)
      .fill(0)
      .map(() => {
        return {
          name: casual.full_name,
          email: casual.email,
          phoneNumber: casual.phone,
          address: casual.address
        };
      });

    const hasNextPage = count !== MAX_NUMBER_OF_CONTACTS && (page*CONTACTS_PER_PAGE) < MAX_NUMBER_OF_CONTACTS;
    return { ContactList, hasNextPage};
  },*/
};
