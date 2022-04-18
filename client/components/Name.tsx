import { gql, useQuery } from '@apollo/client';

const NameComponent = () => {
  const query = gql`
    query User {
      User {
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <span>{data.User.name}</span>
  )
}

export default NameComponent;
