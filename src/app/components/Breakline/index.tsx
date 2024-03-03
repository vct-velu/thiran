import React, { ReactNode, memo } from 'react';
import clsx from 'clsx';

import './style.scss';

interface TitleLineProps {
  title: string;
  subTitle?: ReactNode;
  icon?: ReactNode;
  className?: string;
  leftButton?: ReactNode;
  rightButton?: ReactNode;
}

const Breakline: React.FC<TitleLineProps> = ({ rightButton, subTitle, title, icon, className, leftButton }) => (
  <div className={clsx('break_line', { short_indent: subTitle })}>
    <div className={clsx('break_line_wrapper', className)}>
      {rightButton}
      <div className="break_line_wrapper__line" />
      <div className="break_line_wrapper__text">
        {icon}
        <p>{title}</p>
      </div>
      {leftButton}
    </div>
    {subTitle && <p className="break_line_subtitle">{subTitle}</p>}
  </div>
);

export default memo(Breakline);
