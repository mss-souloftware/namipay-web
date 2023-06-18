import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';

import Layout from '@/components/Layout';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nami Pay</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
