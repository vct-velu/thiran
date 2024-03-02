import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { ThemeTypeEnum } from '_constants/theme';

import { useAppSelector } from 'store/configureStore';

import { currentThemeState } from 'redux/selectors/theme';

import LogoIcon from '../Icons/LogoIcon';
import LogoDarkIcon from '../Icons/LogoDarkIcon';

import './style.scss';

interface FooterProps {
  hideOnMobile?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideOnMobile }) => {
  const { t } = useTranslation();
  const themeType = useAppSelector(currentThemeState);
  return (
    <div className={clsx('footer_wrapper', { hidden: hideOnMobile })}>
      <div className="footer_wrapper_desktop">
        <p>{t('footer.footer_left_privacy_text')}</p>
        <div className="poweredBy">
          <p>Powered by:</p>
          {themeType === ThemeTypeEnum.light ? <LogoDarkIcon /> : <LogoIcon />}
        </div>
        <p>
          <Link to="/about-tech" className="tech">
            {t('footer.about_tech')}
          </Link>
          &nbsp;-&nbsp;
          <Link to="/" className="terms-of-use-link">
            {t('footer.terms_use')}
          </Link>
          &nbsp;-&nbsp;
          <Link to="/" className="privacy-policy-link">
            {t('footer.privacy_policy')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default memo(Footer);
