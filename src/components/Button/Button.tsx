import type { ReactNode } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type Props = {
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
};

const Button = (props: Props) => {
  const { className = '', type = 'button', onClick, icon, children } = props;

  return (
    <button
      className={clsx(styles.button, className)}
      onClick={onClick}
      type={type}
    >
      {icon && <span className={styles.buttonIcon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
