import { useCallback, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { 
  Difficulty,
  DifficultyConstraints,
  DifficultyDefaultsEasy, 
  DifficultyDefaultsHard, 
  DifficultyDefaultsMedium, 
  GameConfig, 
  GameDifficulty,
  HeightConstraints, 
  MinesConstraints,  
  OnChangeCustomSettingsProps, 
  OnChangeDifficultyProps, 
  OptionalGameConfig, 
  OptionalGameDifficulty, 
  WidthConstraints 
} from './types';
import Range from '../components/Range';

const gameDifficultyLabels = {
  0: 'Easy',
  1: 'Medium',
  2: 'Hard',
  3: 'Custom'
}

const getMinesConstraintsMax = (gameConfig: GameConfig) => gameConfig.width * gameConfig.height - 2;

const getDifficultyDefaults = (difficulty: Difficulty | undefined) => {
  switch (difficulty) {
    case Difficulty.Easy:
      return DifficultyDefaultsEasy;
    case Difficulty.Medium:
      return DifficultyDefaultsMedium;
    case Difficulty.Hard:
      return DifficultyDefaultsHard;
    default:
      return null;
  };
};

const onChangeDifficulty = ({ setGameConfig, setGameDifficulty }: OnChangeDifficultyProps) => ({ difficulty }: OptionalGameDifficulty) => {
  const gameConfig = getDifficultyDefaults(difficulty);
  
  if (gameConfig) {
    setGameConfig(gameConfig);
  }

  if (difficulty !== undefined) {
    setGameDifficulty({ difficulty });
  }
};

const onChangeCustomSettings = ({ gameDifficulty, gameConfig, setGameConfig, setGameDifficulty }: OnChangeCustomSettingsProps) => (valueObject: OptionalGameConfig) => {
  let newConfig = {
    ...gameConfig,
    ...valueObject,
  };

  const newMinesConstraintsMax = getMinesConstraintsMax(newConfig);

  if (newConfig.mines > newMinesConstraintsMax) {
    newConfig.mines = newMinesConstraintsMax;
  }

  setGameConfig(newConfig);

  if (gameDifficulty.difficulty !== Difficulty.Custom) {
    setGameDifficulty({ difficulty: Difficulty.Custom });
  }
};

const NewGame: NextPage = () => {
  const [gameDifficulty, setGameDifficulty] = useState<GameDifficulty>({ difficulty: Difficulty.Easy });

  const [gameConfig, setGameConfig] = useState<GameConfig>({
    height: DifficultyDefaultsEasy.height,
    mines: DifficultyDefaultsEasy.mines,
    width: DifficultyDefaultsEasy.width,
  });

  const MinesConstraintsMax = getMinesConstraintsMax(gameConfig);
  const onChangeCustomSettingsCallback = onChangeCustomSettings({ gameDifficulty, gameConfig, setGameConfig, setGameDifficulty });
  const onChangeDifficultyCallback = onChangeDifficulty({ setGameConfig, setGameDifficulty });

  return (
    <div className={styles.container}>
      <Head>
        <title>Minesweeper - New game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          New Game
        </h1>

        <Range
          constraints={DifficultyConstraints}
          id="difficulty"
          label="Difficulty"
          onChange={onChangeDifficultyCallback}
          value={gameDifficulty.difficulty}
          valueLabels={gameDifficultyLabels}
        />
        <Range
          constraints={WidthConstraints}
          id="width"
          label="Width"
          onChange={onChangeCustomSettingsCallback}
          value={gameConfig.width}
        />
        <Range
          constraints={HeightConstraints}
          id="height"
          label="Height"
          onChange={onChangeCustomSettingsCallback}
          value={gameConfig.height}
        />
        <Range
          constraints={{...MinesConstraints, Max: MinesConstraintsMax}}
          id="mines"
          label="Mines"
          onChange={onChangeCustomSettingsCallback}
          value={gameConfig.mines}
        />
      </main>
    </div>
  );
};

export default NewGame;
