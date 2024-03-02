import { colorPalette } from '_types/theme';

export enum ThemeTypeEnum {
  dark = 'dark',
  light = 'light',
}

export const lightTheme: colorPalette = {
  primary: '#D77158',
  text: '#3A3433',
  textSecondary: '#3A3433B3', // 70% opacity
  background: '#FFFFFF',
  backgroundVariant: '#FBF9F9',
  backgroundInverse: '#000000',
  border: '#3A34334D', // 12% opacity
  borderLight: '#3A34330D', // 5% opacity
};

export const darkTheme: colorPalette = {
  primary: '#DC785F',
  text: '#F1E9E7',
  textSecondary: '#F1E9E79B', // 60% opacity
  background: '#000000',
  backgroundVariant: '#1C1A1A',
  backgroundInverse: '#FFFFFF',
  border: '#F1E9E726', // 15% opacity
  borderLight: '#F1E9E71A', // 5% opacity
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
