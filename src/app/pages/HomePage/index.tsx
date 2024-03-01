import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import './style.scss';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home_page.title')}</title>
        <meta name="description" content={t('home_page.description')} />
      </Helmet>
    </>
  );
};
export default memo(HomePage);
