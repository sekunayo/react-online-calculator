import React from "react";
import styles from './button.module.scss';

interface ButtonProps {
  children: any;
  operatorType ?: string;
  handleClick : (buttonValue : string) => void;
}
export const Button: React.FC<ButtonProps> = ({ children, operatorType, handleClick }) => {
  return (
    <button onClick={() => handleClick(children)} type="submit" data-operator={operatorType} className={styles['button']} aria-label={children}>
      {children}
    </button>
  );
};
