import { MinimumCostFormType, MinimumCostResponseType } from '_types';

import axiosApiInstance from './axiosInstance';

const baseUrl = process.env.REACT_APP_BACKEND_DOMAIN;

const minCostService = {
  calculateMinimumCost: (body: MinimumCostFormType) =>
    axiosApiInstance
      .post<MinimumCostResponseType>(`${baseUrl}/api/v1/purchase/calculate-min-cost`, body)
      .then(({ data }) => data),
};
export default minCostService;
