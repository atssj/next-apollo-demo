import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-10 py-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
