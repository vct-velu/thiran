import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ThemeSwitch from 'app/components/ThemeSwitch';
import LangSwitch from 'app/components/LangSwitch';
import Logo from 'app/components/Logo/Logo';

import HomePageTabs from '../HomePageTabs';

import './style.scss';

const UnAuthenticatedHeader: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => navigate('/'), [navigate]);

  return (
    <div className="header_wrapper">
      <Logo className="logo" onClick={onLogoClick} />
      <HomePageTabs />
      <div className="profile">
        <div className="switch_wrapper">
          <ThemeSwitch />
          <LangSwitch />
        </div>
        <div className="profile__right-menu">
          {/* {headerButtons.map((buttonElement, index) => (
            <React.Fragment key={index}>
              {buttonElement}
              {index !== headerButtons.length - 1 && <div className="horizontal-divider" />}
            </React.Fragment>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default memo(UnAuthenticatedHeader);
