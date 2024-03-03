import { createAsyncThunk } from '@reduxjs/toolkit';

import { MinimumCostFormType, MinimumCostResponseType } from '_types';

import minCostService from '_services/minCostService';

export const calculateMinimumCost = createAsyncThunk(
  'minCost/calculateMimumCost',
  async (payload: MinimumCostFormType, { rejectWithValue }) => {
    try {
      const response: MinimumCostResponseType = await minCostService.calculateMinimumCost(payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);
