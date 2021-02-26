import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';

type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};
export default function Home({ level, currentExperience, challengesCompleted }: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, currentExperience, challengesCompleted } = req.cookies;
  return {
    props: {
      level: level && Number(level),
      currentExperience: currentExperience && Number(currentExperience),
      challengesCompleted: challengesCompleted && Number(challengesCompleted),
    },
  };
};
