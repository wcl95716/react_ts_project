// src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: import("./locales/en.json"),
  },
  fr: {
    translation: import('./locales/fr.json'),
  },
  // 在这里添加更多语种
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
