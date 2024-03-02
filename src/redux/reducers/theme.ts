import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeState } from '_types/theme';

const initialThemeState: ThemeState = {
  selected: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    resetState: () => initialThemeState,
    changeThemeState(state, action: PayloadAction<'dark' | 'light'>) {
      state.selected = action.payload;
    },
  },
  extraReducers: {},
});

export const { changeThemeState } = themeSlice.actions;

export default themeSlice;
