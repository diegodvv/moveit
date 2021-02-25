import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
