import { gql, useQuery } from '@apollo/client';
import { Loader, Alert, Title } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

const NameComponent = () => {
  const query = gql`
    query User {
      User {
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(query);

  if (loading) return <Loader />;
  if (error) {
    return (
      <Alert icon={<AlertCircle size={16} />} title="Error!" color="red">
        Something went wrong.
      </Alert>
    );
  }

  return <Title order={2}>Welcome, {data.User.name}.</Title>;
};

export default NameComponent;
