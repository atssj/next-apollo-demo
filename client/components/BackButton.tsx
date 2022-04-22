import type { FunctionComponent } from 'react';
import Link from 'next/link';

const BackButton: FunctionComponent = () => {
  return (
    <Link href="/" passHref>
      <button
        type="button"
        className="flex items-center align-middle text-indigo-900 bg-blue-200 hover:bg-blue-400 border-2 border-blue-700 px-3 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>
    </Link>
  );
};

export default BackButton;
