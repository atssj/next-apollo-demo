import Head from 'next/head';
import Link from 'next/link';
import Name from '../components/Name';

const LandingPage = () => (
  <>
    <Head>
      <title>My contacts | landing</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div>
      Welcome, <Name />
      <br/><br/>
      <Link href="/about"><a>About</a></Link><br/>
      <Link href="/contact"><a>Contact</a></Link>
    </div>
  </>
);

export default LandingPage;
