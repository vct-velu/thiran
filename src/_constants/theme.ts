import { colorPalette } from '_types/theme';

export enum ThemeTypeEnum {
  dark = 'dark',
  light = 'light',
}

export const lightTheme: colorPalette = {
  primary: '#D77158',
  text: '#3A3433',
  textSecondary: '#3A3433B3',
  background: '#FFFFFF',
  background_1: '#f4f4f4',
  background_2: '#eeeeee',
  background_3: '#dddddd',
  backgroundVariant: '#FBF9F9',
  backgroundInverse: '#000000',
  border: '#3A34334D',
  borderLight: '#3A34330D',
};

export const darkTheme: colorPalette = {
  primary: '#DC785F',
  text: '#F1E9E7',
  textSecondary: '#F1E9E79B',
  background: '#000000',
  background_1: '#333333',
  background_2: '#222222',
  background_3: '#111111',
  backgroundVariant: '#1C1A1A',
  backgroundInverse: '#FFFFFF',
  border: '#F1E9E726',
  borderLight: '#F1E9E71A',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
