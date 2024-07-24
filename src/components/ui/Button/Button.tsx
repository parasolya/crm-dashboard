import React from 'react';

import clsx from 'clsx';

import { IButtonProps } from './Button.types';

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
        'inline-flex items-center justify-center leading-[1.5]',
        variant === 'main' &&
          'gap-4 bg-accentDefaultOrange px-8 py-4 font-unbounded text-sm font-medium text-white transition hover:bg-accentDarkOrange md:py-[17.5px] md:text-base',
        variant === 'secondary' &&
          'relative gap-2 bg-transparent fill-darkBlue  font-inter text-xs  font-bold text-darkBlue transition-colors after:absolute after:bottom-[0px] after:block after:h-[0.8px] after:w-full after:bg-accentDefaultOrange after:opacity-0 after:transition-opacity hover:fill-accentDarkOrange hover:text-accentDarkOrange hover:after:opacity-100  focus:fill-accentDarkOrange focus:text-accentDarkOrange  focus:after:opacity-100',
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
