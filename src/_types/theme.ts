export type colorPalette = {
  primary: string;
  text: string;
  textSecondary: string;
  background: string;
  background_1: string;
  background_2: string;
  background_3: string;
  backgroundVariant: string;
  backgroundInverse: string;
  border: string;
  borderLight: string;
};

export type Theme = {
  light: colorPalette;
  dark: colorPalette;
};

export type ThemeKeyType = keyof Theme;

export interface ThemeState {
  selected: ThemeKeyType;
}
