/* eslint-disable import/no-named-as-default-member */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import { resourcesEn } from './en/index.js';
import { resourcesAr } from './ar/index.js';
import { resourcesTa } from './ta/index.js';

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: false, //process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    returnObjects: true,
    defaultNS: 'translation',
    resources: {
      en: resourcesEn,
      ar: resourcesAr,
      ta: resourcesTa,
    },
  });
