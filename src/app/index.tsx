import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import ProjectRoutes from 'routes';

import '../styles/App.scss';

export function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      <div className="app">
        <ProjectRoutes />
      </div>
    </>
  );
}
