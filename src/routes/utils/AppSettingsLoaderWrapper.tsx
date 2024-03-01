import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// import Loader from 'app/components/Loader';

const AppSettingsLoaderWrapper: React.FC = () => {
  // if (settingsLoader) {
  //   return <Loader />;
  // }

  return (
    <>
      <Helmet defaultTitle="" titleTemplate={''} />

      <Outlet />
    </>
  );
};

export default memo(AppSettingsLoaderWrapper);
