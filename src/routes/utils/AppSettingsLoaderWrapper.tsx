import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AppSettingsLoaderWrapper: React.FC = () => {
  return (
    <>
      <Helmet defaultTitle="" titleTemplate={''} />

      <Outlet />
    </>
  );
};

export default memo(AppSettingsLoaderWrapper);
