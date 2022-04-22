import type { FunctionComponent } from 'react';

const Loader: FunctionComponent = () => {
  return (
    <div className="h-22 w-full flex items-center align-middle">
      <p className="w-full text-blue-600">Loading...</p>
    </div>
  );
};

export default Loader;
