import type { NumberConstraints } from '../pages/types';
import styles from '../styles/Range.module.css'

type RangeProps = {
  constraints: NumberConstraints,
  id: string,
  label: string,
  value: number,
  onChange: () => void,
};

const Range = ({
  constraints,
  id,
  label,
  value,
  onChange,
}: RangeProps) => {
  const onChangeRange = event => {
    const value = event.target.value;
    onChange({ [id]: value });
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>{label}:</label>
      <span className={styles.value}>{value}</span>
      <input id={id} type="range" min={constraints.Min} max={constraints.Max} onChange={onChangeRange} value={value} />
    </div>
  )
};

export default Range;
