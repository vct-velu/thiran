export type colorPalette = {
  primary: string;
  text: string;
  textSecondary: string;
  background: string;
  backgroundVariant: string;
  border: string;
  borderLight: string;
};

export type Theme = {
  light: colorPalette;
  dark: colorPalette;
};

export type ThemeKeyType = keyof Theme | 'system';

export interface ThemeState {
  selected: ThemeKeyType;
}
