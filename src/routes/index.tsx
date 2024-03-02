import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'app/components/Loader';
import NotFoundPage from 'app/pages/NotFoundPage';
import HomePage from 'app/pages/HomePage';

import AppSettingsLoaderWrapper from './utils/AppSettingsLoaderWrapper';

const ProjectRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppSettingsLoaderWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="/about-tech" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default React.memo(ProjectRoutes);
