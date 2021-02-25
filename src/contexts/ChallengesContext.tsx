import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

type Challenge = {
  type: 'body' | 'eye';
  description: string;
  amount: number;
};

type ChallengeContextData = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
};
export const ChallengesContext = createContext({} as ChallengeContextData);

type Props = {
  children: ReactNode;
};
export function ChallengesProvider({ children }: Props) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        startNewChallenge,
        resetChallenge,
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
