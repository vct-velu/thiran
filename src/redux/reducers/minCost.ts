import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MinimumCostFormType, MinimumCostResponseType } from '_types';

import { calculateMinimumCost } from 'redux/actions/minCost';

interface MinCostStateType {
  isLoading: boolean;
  formData: MinimumCostFormType | null;
  responseData: MinimumCostResponseType | null;
}

const initialMinCostState: MinCostStateType = {
  isLoading: true,
  formData: null,
  responseData: null,
};

const minCostSlice = createSlice({
  name: 'minCost',
  initialState: initialMinCostState,
  reducers: {
    resetState: () => initialMinCostState,
    changeFormDataAction: (state, action: PayloadAction<Partial<MinimumCostFormType>>) => {
      console.log(action.payload);
      state.formData = { ...state.formData!, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder.addCase(calculateMinimumCost.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(calculateMinimumCost.fulfilled, (state, action: PayloadAction<MinimumCostResponseType>) => {
      state.responseData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(calculateMinimumCost.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const { resetState, changeFormDataAction } = minCostSlice.actions;

export default minCostSlice;
