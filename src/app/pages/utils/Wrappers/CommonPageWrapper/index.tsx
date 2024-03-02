import React, { ReactNode, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import clsx from 'clsx';

import { HeaderTypesEnum } from '_constants/headerConstants';

import Header from 'app/components/Header';

import './style.scss';

interface CommonPageWrapperProps {
  title: string;
  description: string;
  withOutlet: boolean;
  children?: ReactNode;
  className?: string;
  headerType?: HeaderTypesEnum;
}

const CommonPageWrapper: React.FC<CommonPageWrapperProps> = ({
  title,
  description,
  withOutlet,
  children,
  headerType = HeaderTypesEnum.UN_AUTH,
  className = '',
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="" />
      </Helmet>
      <Header type={headerType} />

      <main className="app_wrapper">
        <div className={clsx('page_content', className)}>
          {children}
          {withOutlet && <Outlet />}
        </div>
      </main>
    </>
  );
};

export default memo(CommonPageWrapper);
