import type { FunctionComponent, MouseEventHandler } from 'react';

type Props = {
  label: string;
  onClick: MouseEventHandler;
};

const LoadMoreButton: FunctionComponent<Props> = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center align-middle bg-blue-200 text-indigo-900 hover:bg-blue-400 border-2 border-blue-700 px-3 py-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </button>
  );
};

export default LoadMoreButton;
