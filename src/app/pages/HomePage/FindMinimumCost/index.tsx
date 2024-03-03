import React from 'react';

import InputDataForm from './InputDataForm';
import MinimumCostResult from './MinimumCostResult';

import './style.scss';

const FindMinimumCost: React.FC = () => {
  return (
    <div className="minimum_cost_wrapper">
      <InputDataForm />
      <MinimumCostResult />
    </div>
  );
};

export default FindMinimumCost;
