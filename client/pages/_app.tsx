import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo-client';
import Layout from '../components/Layout';
import '../styles/global.css';

const ContactApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default ContactApp;
