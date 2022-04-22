import Link from 'next/link';
import type { FunctionComponent } from 'react';

const Navbar: FunctionComponent = () => {
  return (
    <header className="w-full px-10 py-5 bg-blue-900">
      <nav className="flex items-center justify-between">
        <Link href="/" passHref>
          <a className="flex items-center text-white space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xl font-semibold">My contact list</span>
          </a>
        </Link>
        <ul className="flex items-center p-0">
          <li className="px-5 text-white">
            <Link href="/about" passHref>
              About
            </Link>
          </li>
          <li className="px-5 text-white">
            <Link href="/contacts" passHref>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
