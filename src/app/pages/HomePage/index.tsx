import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderTypesEnum } from '_constants/headerConstants';

import CommonPageWrapper from '../utils/Wrappers/CommonPageWrapper';

import './style.scss';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { t } = useTranslation();

  return (
    <CommonPageWrapper
      className="home_page"
      title={t('home_page.title')}
      description={t('home_page.description')}
      withOutlet={false}
      headerType={HeaderTypesEnum.UN_AUTH}
    ></CommonPageWrapper>
  );
};
export default memo(HomePage);
