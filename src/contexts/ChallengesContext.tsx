import { createContext, ReactNode, useState } from 'react';

type ChallengeContextData = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
};
export const ChallengesContext = createContext({} as ChallengeContextData);

type Props = {
  children: ReactNode;
};
export function ChallengesProvider({ children }: Props) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('new challenge');
  }
  return (
    <ChallengesContext.Provider
      value={{ level, levelUp, currentExperience, challengesCompleted, startNewChallenge }}>
      {children}
    </ChallengesContext.Provider>
  );
}
