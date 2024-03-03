import clsx from 'clsx';
import React, { memo } from 'react';

import { PasswordListErrorsType } from '_types';

import AddButtonIcon from '../Icons/AddButtonIcon';
import CheckMarkIcon from '../Icons/CheckMarkIcon';

import './style.scss';

interface ErrorCloudProps {
  className?: string;
  text?: string;
  list?: PasswordListErrorsType[] | undefined;
  error?: boolean;
  pointerDirection?: boolean;
}
const ErrorCloud: React.FC<ErrorCloudProps> = ({ text, list, error, className, pointerDirection = true }) => (
  <div className={clsx('error_cloud', { error }, className)}>
    <div
      className={clsx('error_cloud__triangle', {
        top: pointerDirection,
        bottom: !pointerDirection,
      })}
    >
      <div />
      <div />
      <div />
    </div>
    <p className="error_cloud__text">{text}</p>
    {list && (
      <div className="error_cloud__list">
        {list?.map((elem, index) => (
          <div key={index} className="error_cloud__list_item">
            {elem.isError ? <AddButtonIcon className="icon" /> : <CheckMarkIcon className="icon" />}

            <p>{elem.text}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default memo(ErrorCloud);
