import type { ChangeEvent } from 'react';
import type { RangeProps } from '../pages/types';
import styles from '../styles/Range.module.css'

const Range = ({
  constraints,
  id,
  label,
  onChange,
  value,
  valueLabels,
}: RangeProps) => {
  const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange({ [id]: value });
  }

  const valueLabel = valueLabels ? valueLabels[value] : value;

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>{label}:</label>
      <span className={styles.value}>{valueLabel}</span>
      <input id={id} type="range" min={constraints.Min} max={constraints.Max} onChange={onChangeRange} value={value} />
    </div>
  )
};

export default Range;
