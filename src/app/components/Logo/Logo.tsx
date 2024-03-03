import React, { memo } from 'react';

import LogoIcon from '../Icons/LogoIcon';

import './style.scss';

interface LogoProps {
  className?: string;
  onClick?: Function;
}
const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  return (
    <div className="logo_wrapper" onClick={() => onClick && onClick()}>
      <LogoIcon className={className} />
    </div>
  );
};

export default memo(Logo);
