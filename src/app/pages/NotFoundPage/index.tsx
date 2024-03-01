import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PageNotFoundIcon from 'app/components/Icons/PageNotFoundIcon';

import './style.scss';

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('not_found_page.title')}</title>
        <meta name="description" content={t('not_found_page.description')} />
      </Helmet>
      <div className="app_wrapper">
        <div id="notFound" className="notfound">
          <div className="notfound_wrapper">
            <div className="notfound_wrapper__text">
              <p>
                {t('not_found_page.ooops')}
                !...
              </p>

              <p>{t('not_found_page.page_not_found')}</p>
            </div>

            <PageNotFoundIcon className="notfound_wrapper__number" />
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(NotFoundPage);
