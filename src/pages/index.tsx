import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>좃소님의 Next App 입닏나.</h1>
      </main>
      <footer>
        <span>Footer</span>
      </footer>
    </div>
  );
};

export default Home;
