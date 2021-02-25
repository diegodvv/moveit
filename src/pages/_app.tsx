import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [level, setLevel] = useState(1);
  return (
    <ChallengesContext.Provider value={{ level: 1 }}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  );
}

export default MyApp;
