import React, { useMemo, ReactNode, useCallback, memo } from 'react';
import clsx from 'clsx';

// import ErrorCloud from 'app/components/ErrorCloud/ErrorCloud';

import CheckedIcon from '../Icons/CheckedIcon';
import ErrorCloud from '../ErrorCloud/ErrorCloud';

import './style.scss';

interface SelectButtonSimpleProps {
  rightDownIcon?: ReactNode;
  leftDownIcon?: ReactNode;
  title: string;
  value: string;
  disabled?: boolean;
  selected: boolean;
  type: 'checkbox' | 'select';
  onClick: Function;
  error?: string | null | undefined;
  fieldAligment?: 'left' | 'right';
}
const SelectButtonSimple: React.FC<SelectButtonSimpleProps> = ({
  rightDownIcon,
  title,
  value,
  disabled,
  selected,
  type,
  leftDownIcon,
  onClick,
  error,
  fieldAligment = 'left',
}) => {
  const fieldToClickOn = useMemo(() => {
    switch (type) {
      case 'select':
        return <div className={clsx('select_button__circle', { active: selected })} />;
      case 'checkbox':
        return (
          <div className={clsx('select_button__box', { active: selected })}>
            {selected && <CheckedIcon className="select_button__box_icon" />}
          </div>
        );
      default:
        return <></>;
    }
  }, [selected, type]);

  const handleClick = useCallback(() => {
    if (disabled) {
      return;
    }

    onClick(value);
  }, [onClick, selected, disabled, value]);

  return (
    <div className={clsx('select_button', { active: selected, disabled, error })} onClick={handleClick}>
      <div className="select_button__block">
        {fieldAligment === 'left' && fieldToClickOn}
        {leftDownIcon && <div className={'select_button__icon left'}>{leftDownIcon}</div>}
        <div className="select_button__text">{title}</div>
      </div>
      {error && <ErrorCloud error text={error} />}
      {fieldAligment === 'right' && fieldToClickOn}
      {rightDownIcon && <div className={'select_button__icon'}>{rightDownIcon}</div>}
    </div>
  );
};

export default memo(SelectButtonSimple);
