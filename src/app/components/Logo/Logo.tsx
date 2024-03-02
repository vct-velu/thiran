import React, { memo } from 'react';

import { ThemeTypeEnum } from '_constants/theme';

import { useAppSelector } from 'store/configureStore';

import { currentThemeState } from 'redux/selectors/theme';

import LogoDarkIcon from '../Icons/LogoDarkIcon';
import LogoIcon from '../Icons/LogoIcon';

import './style.scss';

interface LogoProps {
  className?: string;
  onClick?: Function;
}
const Logo: React.FC<LogoProps> = ({ className, onClick }) => {
  const themeType = useAppSelector(currentThemeState);
  return (
    <div className="logo_wrapper" onClick={() => onClick && onClick()}>
      {themeType === ThemeTypeEnum.dark ? <LogoIcon className={className} /> : <LogoDarkIcon className={className} />}
    </div>
  );
};

export default memo(Logo);
