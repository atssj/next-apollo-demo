import { FunctionComponent, useEffect } from 'react';
import { useState } from 'react';

const Footer: FunctionComponent = () => {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex flex-col py-3 md:py-5">
      <p className="text-sm text-center text-gray-500">
        Copyright &copy; MyContacts - {year}
      </p>
    </footer>
  );
};

export default Footer;
