import { RootState } from 'store/configureStore';

export const currentThemeState = (state: RootState) => state.theme.selected;
