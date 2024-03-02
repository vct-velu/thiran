import React, { memo, useEffect, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

import { ThemeTypeEnum } from '_constants/theme';

import { useAppDispatch } from 'store/configureStore';

import { changeThemeState } from 'redux/reducers/theme';

import { changeThemeSettings } from 'utils/changeTheme';

import './style.scss';

const ThemeSwitch: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const themeType = isDarkMode ? ThemeTypeEnum.dark : ThemeTypeEnum.light;
    changeThemeSettings(isDarkMode ? ThemeTypeEnum.dark : ThemeTypeEnum.light);
    dispatch(changeThemeState(themeType));
  }, [dispatch, isDarkMode]);

  return (
    <div className="theme_switch">
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={50} speed={2} />
    </div>
  );
};

export default memo(ThemeSwitch);
