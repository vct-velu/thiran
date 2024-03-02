import { TFunction } from 'i18next';

export enum HeaderTypesEnum {
  UN_AUTH,
  AUTH,
}

export const platformLanguageChoices = [
  { value: 'en', translate: 'English', initName: 'US' },
  { value: 'ar', translate: 'Arabic', initName: 'عرب' },
  { value: 'ta', translate: 'Tamil', initName: 'தமிழ்' },
];

export interface HeaderTabs {
  name: string;
  path: string;
}

export const AuthenticatedHeaderTabs = (t: TFunction): HeaderTabs[] => [
  {
    name: t('home'),
    path: '/',
  },
  {
    name: t('tech_stack'),
    path: '/tech-stack',
  },
];

export const unauthenticatedHeaderTabs = (t: TFunction): HeaderTabs[] => [];
