'use client';

import { ReactEventHandler, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonPropsType = {
  children: ReactNode;
  onClick?: ReactEventHandler;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  className,
  onClick,
  disabled = false,
}: ButtonPropsType) {
  return (
    <div>
      <button
        className={twMerge(
          `px-4 py-2 rounded-3xl bg-primary-600 text-white ${disabled ? 'cursor-not-allowed' : ''}`,
          className
        )}
        onClick={onClick}
        disabled={disabled}>
        {children}
      </button>
    </div>
  );
}

