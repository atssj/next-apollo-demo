import Link from 'next/link';
import { useState } from 'react';
import type { FunctionComponent } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: FunctionComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <a className={styles.brand}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className={styles.appName}>MyContacts</span>
          </a>
        </Link>
        <ul className={styles.navMenu}>
          <li className={styles.menuItem}>
            <Link href="/about" passHref>
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contacts" passHref>
              Contacts
            </Link>
          </li>
        </ul>
        <button type="button" onClick={toggleMobileMenu} className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {openMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      <div className="md:hidden">
        <ul
          className={
            openMenu
              ? `${styles.mobileMenu} flex flex-col`
              : `${styles.mobileMenu} hidden`
          }
        >
          <li className={styles.menuItem}>
            <Link href="/about" passHref>
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contacts" passHref>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
