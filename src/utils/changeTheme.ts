import { ThemeTypeEnum, themes } from '../_constants/theme';

export const changeThemeSettings = (themeType: ThemeTypeEnum) => {
  const { light, dark } = themes;
  if (themeType === ThemeTypeEnum.light) {
    document.documentElement.style.setProperty('--primary', light.primary);
    document.documentElement.style.setProperty('--text', light.text);
    document.documentElement.style.setProperty('--textSecondary', light.textSecondary);
    document.documentElement.style.setProperty('--background', light.background);
    document.documentElement.style.setProperty('--backgroundVariant', light.backgroundVariant);
    document.documentElement.style.setProperty('--backgroundInverse', light.backgroundInverse);
    document.documentElement.style.setProperty('--border', light.border);
    document.documentElement.style.setProperty('--borderLight', light.borderLight);
  } else if (themeType === ThemeTypeEnum.dark) {
    document.documentElement.style.setProperty('--primary', dark.primary);
    document.documentElement.style.setProperty('--text', dark.text);
    document.documentElement.style.setProperty('--textSecondary', dark.textSecondary);
    document.documentElement.style.setProperty('--background', dark.background);
    document.documentElement.style.setProperty('--backgroundVariant', dark.backgroundVariant);
    document.documentElement.style.setProperty('--backgroundInverse', dark.backgroundInverse);
    document.documentElement.style.setProperty('--border', dark.border);
    document.documentElement.style.setProperty('--borderLight', dark.borderLight);
  }
};
