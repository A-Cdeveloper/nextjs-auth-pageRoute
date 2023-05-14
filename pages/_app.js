import '@/styles/globals.css';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
