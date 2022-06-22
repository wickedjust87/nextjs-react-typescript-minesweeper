/* Enums */

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

/* Types */

export type GameConfig = {
  height: number,
  mines: number,
  width: number,
};

export type NumberConstraints = {
  Default: number,
  Max: number,
  Min: number,
};

export type OptionalGameConfig = {
  height?: number,
  mines?: number,
  width?: number,
};

export type RangeProps = {
  constraints: NumberConstraints,
  id: keyof GameConfig,
  label: string,
  value: number,
  onChange: (valueObject: OptionalGameConfig) => void,
};
