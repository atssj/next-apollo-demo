import type { FunctionComponent } from 'react';
import type { TContact } from '../types/Contact';

type Props = {
  contact: TContact;
};

const ContactCard: FunctionComponent<Props> = ({ contact }) => {
  return (
    <li className="bg-white drop-shadow-md rounded-md p-5">
      <article>
        <header className="text-2xl text-slate-800">{contact.name}</header>
        <p>
          <span className="font-semibold">Email: </span>
          <a
            href={`mailto:${contact.email}`}
            className="text-blue-800 font-thin"
          >
            {contact.email}
          </a>
        </p>
        <p>
          <span className="font-semibold">Address: </span>
          {contact.address}
        </p>
        <p>
          <span className="font-semibold">Contact: </span>
          <a href={`tel:${contact.phoneNumber}`} className="text-blue-800 font-thin">
            {contact.phoneNumber}
          </a>
        </p>
      </article>
    </li>
  );
};

export default ContactCard;
