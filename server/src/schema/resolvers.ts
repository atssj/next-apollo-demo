import casual from 'casual';
import { MAX_NUMBER_OF_CONTACTS, CONTACTS_PER_PAGE } from './../constants';

export const resolvers = {
  Query: {
    User() {
      return {
        name: casual.full_name
      };
    },
    ContactList(parent: any, { limit = CONTACTS_PER_PAGE, offset = 1 }) {
      const numberOfPages = MAX_NUMBER_OF_CONTACTS / CONTACTS_PER_PAGE;
      const isOutOfRange = offset > numberOfPages;

      if (isOutOfRange) {
        return {
          Contacts: [],
          PageInfo: {
            numberOfPages,
            hasNext: false
          }
        };
      }

      const contacts = new Array(limit).fill(0).map((item, index) => {
        const id = offset + index;
        return {
          id,
          name: casual.full_name,
          email: casual.email,
          phoneNumber: casual.phone,
          address: casual.address
        };
      });
      const pageInfo = {
        numberOfPages,
        hasNext: offset < numberOfPages
      };
      return {
        Contacts: contacts,
        PageInfo: pageInfo
      };
    }
  }
};
