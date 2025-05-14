import React from 'react';
import { IconProps } from '../types/icon';

export const HamburgerIcon = ({
  className = 'h-6 w-6',
  ...props
}: IconProps) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
      stroke="var(--background)"
      d="M4 6h16M4 12h16m-7 6h7"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="currentColor"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);
