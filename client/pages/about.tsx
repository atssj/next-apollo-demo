import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <>
    <Head>
      <title>My contacts | about</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      <h1>About page</h1>
      <br/><br/>
      <Link href="/"><a>Go Back</a></Link>
    </main>
  </>
)
