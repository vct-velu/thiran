import clsx from 'clsx';
import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

interface LoaderProps {
  withContainer?: boolean;
  containerType?: 'popover-centered' | 'inline-block';
  containerClassName?: string;
  withText?: boolean;
  textTranslationKey?: string;
  color?: 'black' | 'white' | 'main-gray';
  size?: 'small' | 'normal' | 'large';
}

const Loader: React.FC<LoaderProps> = ({
  withContainer = true,
  containerType = 'popover-centered',
  containerClassName = '',
  withText = true,
  textTranslationKey = 'loading',
  color = 'black',
  size = 'large',
}) => {
  const { t } = useTranslation();

  const loaderInnerContent = useMemo(
    () => (
      <>
        <div className={clsx('loader', color, size)}>
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
        </div>
        {withText && <p className="loader-text">{t(textTranslationKey)}</p>}
      </>
    ),
    [color, size, withText, textTranslationKey, t],
  );

  return (
    <>
      {withContainer ? (
        <div id="container" className={clsx('loader_container', containerType, containerClassName)}>
          {loaderInnerContent}
        </div>
      ) : (
        loaderInnerContent
      )}
    </>
  );
};

export default memo(Loader);
