import React, { memo } from 'react';

interface CheckedIconProps {
  className?: string;
  color?: string;
}
const CheckedIcon: React.FC<CheckedIconProps> = ({ className, color }) => (
  <svg
    className={className}
    width="1em"
    height="1em"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 5.5L4.11765 10L14 1" stroke={color || 'white'} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default memo(CheckedIcon);
