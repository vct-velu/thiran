import React, { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { HeaderTabs, unauthenticatedHeaderTabs } from '_constants/headerConstants';

import './style.scss';

const HomePageTabs: React.FC = () => {
  const { t } = useTranslation();

  const headerTabsConstants = unauthenticatedHeaderTabs(t);

  if (!headerTabsConstants?.length) {
    return null;
  }

  return (
    <div className="home_tabs">
      {headerTabsConstants?.map((elem: HeaderTabs) => (
        <NavLink
          to={elem.path}
          className={({ isActive }) => clsx('home_tabs_item', { active: isActive })}
          key={elem.name}
        >
          <div className="home_tabs_item__text">{elem.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default memo(HomePageTabs);
