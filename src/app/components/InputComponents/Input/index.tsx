import clsx from 'clsx';
import React, { memo, useCallback, useEffect, useRef, useState, HTMLInputTypeAttribute, useMemo } from 'react';
// import { PasswordListErrorsType } from '_types/user.interface';

// import ErrorCloud from '../../ErrorCloud/ErrorCloud';
// import CloseEyeIcon from '../../Icons/CloseEyeIcon';
// import EyeIcon from '../../Icons/EyeIcon';

import '../style.scss';
import './style.scss';

// text email password number search tel url

type InputProps = {
  type: HTMLInputTypeAttribute | undefined;
  value: string;
  onChange: Function;
  placeholder: string;
  name?: string;
  autocomplete?: boolean | string;
  disabled?: boolean;
  maxLength?: number;
  readonly?: boolean;
  error?: boolean;
  errorText?: string | null;
  // errorList?: PasswordListErrorsType[] | undefined;
  errorWithFocus?: boolean;
  handleFocus?: { inputFocus: boolean | null; setInputFocus: Function };
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  autocomplete,
  disabled,
  maxLength,
  placeholder,
  readonly,
  value,
  onChange,
  error,
  errorText,
  // errorList,
  errorWithFocus,
  handleFocus,
}) => {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute | undefined>(type);
  const [focus, setFocus] = useState<boolean>(false);
  const inputRef = useRef<any | null>(null);

  const setPasswordVisible = useCallback(() => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }, [inputType]);

  const onChangeValue = useCallback(
    event => {
      const value = event.target.value;

      if (!maxLength || value.length <= maxLength) {
        onChange(value, event);
      }
    },
    [maxLength, onChange],
  );

  const handleStateEvent = useCallback(
    (isFocus: boolean) => () => {
      handleFocus?.setInputFocus(!isFocus);
      setFocus(isFocus);
    },
    [handleFocus],
  );
  const onFocus = useMemo(() => handleStateEvent(true), [handleStateEvent]);
  const onBlur = useMemo(() => handleStateEvent(false), [handleStateEvent]);

  useEffect(() => {
    if (!focus && value !== value?.trim()) {
      onChange(value?.trim());
    }
  }, [focus]);

  const onWheelPreventChange = useCallback(event => {
    event.target.blur();
    event.stopPropagation();
  }, []);

  const autocompleteValue = typeof autocomplete === 'string' ? autocomplete : autocomplete ? 'on' : 'off';

  return (
    <div
      className={clsx('entry_field', {
        error: error && !focus,
        focus,
      })}
    >
      <input
        type={inputType}
        name={name}
        autoComplete={autocompleteValue}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readonly}
        value={value}
        onChange={onChangeValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onWheel={onWheelPreventChange}
        ref={inputRef}
      />

      {/* {error && errorText && (errorWithFocus || !focus) && <ErrorCloud text={errorText} list={errorList} />} */}
      {type === 'password' && (
        <div onClick={setPasswordVisible}>
          {/* {inputType === 'password' ? <CloseEyeIcon className="eye" /> : <EyeIcon className="eye" />} */}
        </div>
      )}
    </div>
  );
};

export default memo(Input);
