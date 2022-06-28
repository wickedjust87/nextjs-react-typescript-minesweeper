/* Enums */

export enum DifficultyDefaultsEasy {
  height = 5,
  mines = 6,
  width = 5,
}

export enum DifficultyDefaultsMedium {
  height = 10,
  mines = 30,
  width = 10,
}

export enum DifficultyDefaultsHard {
  height = 99,
  mines = 3200,
  width = 99,
}

export enum Difficulty {
  Easy,
  Medium,
  Hard,
  Custom,
}

export enum DifficultyConstraints {
  Max = 3,
  Min = 0,
}

export enum HeightConstraints {
  Max = 99,
  Min = 2,
}

export enum MinesConstraints {
  Min = 1,
}

export enum WidthConstraints {
  Max = 99,
  Min = 2,
}

/* Types */

export type GameConfig = {
  height: number,
  mines: number,
  width: number,
};

export type GameDifficulty = {
  difficulty: Difficulty,
};

export type NumberConstraints = {
  Max: number,
  Min: number,
};

export type OptionalGameConfig = {
  height?: number,
  mines?: number,
  width?: number,
};

export type OptionalGameDifficulty = {
  difficulty?: number,
};

export type OnChangeCustomSettingsProps = {
  gameConfig: GameConfig,
  setGameConfig: (gameConfig: GameConfig) => void,
};

export type OnChangeDifficultyProps = {
  setGameConfig: (gameConfig: GameConfig) => void,
  setGameDifficulty: (gameDifficulty: GameDifficulty) => void,
};

export type OnChangeRangeProps = {
  [key:string]: string,
};

export type ValueLabels = { [key:number]: string };

export type RangeProps = {
  constraints: NumberConstraints,
  id: string,
  label: string,
  onChange: (valueObject: OnChangeRangeProps) => void,
  value: number,
  valueLabels?: ValueLabels,
};
