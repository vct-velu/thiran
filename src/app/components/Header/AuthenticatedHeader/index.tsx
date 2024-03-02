import React, { memo } from 'react';

import ThemeSwitch from 'app/components/ThemeSwitch';

import './style.scss';

const AuthenticatedHeader: React.FC = () => {
  return (
    <>
      <div className="logo"></div>
      <div className="switches">
        <ThemeSwitch />
      </div>
    </>
  );
};

export default memo(AuthenticatedHeader);
