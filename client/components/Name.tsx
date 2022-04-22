import type { FunctionComponent } from 'react';
import { gql, useQuery } from '@apollo/client';

const NameComponent: FunctionComponent = () => {
  const query = gql`
    query User {
      User {
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(query);

  if (loading) return <p className="text-2xl blue-600">Loading...</p>;
  if (error) {
    return <p className="text-2xl red-600">Something went wrong!</p>;
  }

  return <h1 className="text-3xl">Welcome, {data.User.name}.</h1>;
};

export default NameComponent;
