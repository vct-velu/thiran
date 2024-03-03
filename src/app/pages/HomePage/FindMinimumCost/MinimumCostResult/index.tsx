import React from 'react';
import { useTranslation } from 'react-i18next';

import Breakline from 'app/components/Breakline';

import { useAppSelector } from 'store/configureStore';

import { getMinCost } from 'redux/selectors/minCost';

import './style.scss';

const MinimumCostResult: React.FC = () => {
  const { t } = useTranslation();

  const data = useAppSelector(getMinCost);

  if (!data) {
    return null;
  }
  return (
    <>
      <Breakline className="line" title={'Calculated Result'} subTitle={''} />
      <div className="cost_details">
        <p>{`${t('home_page.min_cost.min_cost')} ${data?.minimumCost}`}</p>
        <p>{`${t('home_page.min_cost.units_in_india')} ${data?.unitsLeftInIndia}`}</p>
        <p>{`${t('home_page.min_cost.units_in_srlianka')} ${data?.unitsLeftInSrilanka}`}</p>
      </div>
    </>
  );
};

export default MinimumCostResult;
