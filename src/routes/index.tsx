import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'app/components/Loader';
import AppSettingsLoaderWrapper from './utils/AppSettingsLoaderWrapper';
import NotFoundPage from 'app/pages/NotFoundPage';
import HomePage from 'app/pages/HomePage';

const ProjectRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppSettingsLoaderWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default React.memo(ProjectRoutes);
