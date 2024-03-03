import { RootState } from 'store/configureStore';

export const getMinCost = (state: RootState) => state.minCost.responseData;
export const minCostFormData = (state: RootState) => state.minCost.formData;
