import styles from './Index.module.scss';

export const BUTTON_TYPE = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  WARNING: 'warning'
} as const;

export const BUTTON_SIZE = {
  LARGE: 'large',
  DEFAULT: 'default',
  SMALL: 'small'
} as const;

export type ButtonProps = {
  type: typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE],
  label: string,
  onClick: () => void,
  size?: typeof BUTTON_SIZE[keyof typeof BUTTON_SIZE],
  disabled?: boolean
};


const Button = ({ type, label, onClick, size=BUTTON_SIZE.DEFAULT, disabled=false }: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[type]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
