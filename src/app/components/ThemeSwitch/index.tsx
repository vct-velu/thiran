import React, { memo, useEffect, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

import { ThemeTypeEnum } from '_constants/theme';

import { useAppDispatch } from 'store/configureStore';

import { changeThemeState } from 'redux/reducers/theme';

import { changeThemeSettings } from 'utils/changeTheme';

import './style.scss';

const ThemeSwitch: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(() => true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const themeType = isLightMode ? ThemeTypeEnum.light : ThemeTypeEnum.dark;
    changeThemeSettings(isLightMode ? ThemeTypeEnum.light : ThemeTypeEnum.dark);
    dispatch(changeThemeState(themeType));
  }, [dispatch, isLightMode]);

  return (
    <div className="theme_switch">
      <DarkModeToggle onChange={setIsLightMode} checked={isLightMode} size={45} speed={2} />
    </div>
  );
};

export default memo(ThemeSwitch);
