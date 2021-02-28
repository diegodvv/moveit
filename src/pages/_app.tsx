import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
