import React from 'react';
import { IconProps } from '../types/icon';

export const CloseIcon = ({ className = 'h-6 w-6', ...props }: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      stroke="var(--background)"
      d="M6 18L18 6M6 6l12 12"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="currentColor"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
