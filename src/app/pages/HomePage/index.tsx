import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderTypesEnum } from '_constants/headerConstants';

import TitleLine from 'app/components/TitleLine';
import Breakline from 'app/components/Breakline';

import CommonPageWrapper from '../utils/Wrappers/CommonPageWrapper';

import FindMinimumCost from './FindMinimumCost';
import BraceList from './BraceList';

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
    >
      <TitleLine title={t('home_page.min_cost.title')} subTitle={t('home_page.min_cost.sub_title')} />
      <Breakline className="line" title={'Input Data Form'} subTitle={''} />
      <FindMinimumCost />
      <TitleLine title={t('home_page.brace_list.title')} subTitle={t('home_page.brace_list.sub_title')} />
      {/* <Breakline className="line" title={'Input Data Form'} subTitle={''} /> */}
      <BraceList />
    </CommonPageWrapper>
  );
};
export default memo(HomePage);
