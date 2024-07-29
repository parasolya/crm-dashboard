import React from 'react';

import clsx from 'clsx';

import { IButtonProps } from './Button.types';

import styles from './Button.module.scss';

const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  icon,
  iconPosition,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.buttonWrapper,
        variant === 'main' &&
          styles.buttonMain,
        variant === 'secondary' &&
          '',
       className,
      )}
      {...rest}
    >
      {icon && iconPosition === 'before' && icon}
      {children}
      {icon && iconPosition === 'after' && icon}
    </button>
  );
};

export default Button;
