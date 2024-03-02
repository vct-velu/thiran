import React, { memo, useMemo } from 'react';

import { HeaderTypesEnum } from '_constants/headerConstants';

import UnAuthenticatedHeader from './UnAuthenticatedHeader';
import AuthenticatedHeader from './AuthenticatedHeader';

import './style.scss';

interface HeaderProps {
  type: HeaderTypesEnum;
}

const Header: React.FC<HeaderProps> = props => {
  const { type } = props;

  const header = useMemo(() => {
    switch (type) {
      case HeaderTypesEnum.UN_AUTH:
        return <UnAuthenticatedHeader />;
      case HeaderTypesEnum.AUTH:
        return <AuthenticatedHeader />;
      default:
        return <UnAuthenticatedHeader />;
    }
  }, [type]);

  return <header className="header">{header}</header>;
};

export default memo(Header);
