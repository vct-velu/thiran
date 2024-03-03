import React, { ReactNode, memo } from 'react';
import clsx from 'clsx';

import './style.scss';

interface TitleLineProps {
  title: string;
  subTitle: ReactNode;
  classNames?: string;
}
const TitleLine: React.FC<TitleLineProps> = ({ title, subTitle, classNames }) => (
  <div className={clsx('title_line', classNames)}>
    <div className="title_line__block">
      <p className="title">{title}</p>
      <div className="line" />
    </div>
    <p className="title_line__text">{subTitle}</p>
  </div>
);

export default memo(TitleLine);
