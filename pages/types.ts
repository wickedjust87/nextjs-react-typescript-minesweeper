export enum HeightConstraints {
  Default = 20,
  Max = 99,
  Min = 2,
}

export enum MinesConstraints {
  Default = 5,
  Min = 1,
}

export enum WidthConstraints {
  Default = 20,
  Max = 99,
  Min = 2,
}

export type NumberConstraints = {
  Default: number,
  Max: number,
  Min: number,
};

export type GameConfig = {
  height: number,
  mines: number,
  width: number,
};

export type OptionalGameConfig = {
  height?: number,
  mines?: number,
  width?: number,
};

export type OneOfConfig = { height: number } | { mines: number } | { width: number };
