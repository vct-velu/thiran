import React, { useMemo, memo, useCallback } from 'react';
import clsx from 'clsx';

import CheckedIcon from '../Icons/CheckedIcon';
import Input from '../InputComponents/Input';

import './style.scss';

interface SelectButtonEditableProps {
  rightDownIcon?: JSX.Element;
  leftDownIcon?: JSX.Element;
  value: string;
  onChange: Function;
  disabled?: boolean;
  selected: boolean;
  placeholder: string;
  type: 'checkbox' | 'select';
  error?: string | null | undefined;
}
const SelectButtonEditable: React.FC<SelectButtonEditableProps> = ({
  rightDownIcon,
  value,
  placeholder,
  onChange,
  disabled,
  selected,
  type,
  leftDownIcon,
  error = null,
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

  const changeValue = useCallback(
    (newValue: string, event) => {
      event?.preventDefault();
      event?.stopPropagation();

      onChange(selected, newValue);
    },
    [selected, onChange],
  );

  const handleClick = useCallback(() => {
    if (disabled) {
      return;
    }

    onChange(!selected, value);
  }, [selected, value, onChange]);

  return (
    <div className={clsx('select_button entry', { active: selected, disabled })} onClick={handleClick}>
      <div className="select_button__block">
        {fieldToClickOn}
        <div className={'select_button__icon left'}>{leftDownIcon}</div>
        <div
          onClick={event => {
            event.stopPropagation();
          }}
        >
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={changeValue}
            error={!!error}
            errorText={error}
          />
        </div>
      </div>

      <div className={'select_button__icon'}>{rightDownIcon}</div>
    </div>
  );
};

export default memo(SelectButtonEditable);
