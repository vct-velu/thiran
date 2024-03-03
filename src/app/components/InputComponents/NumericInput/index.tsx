import clsx from 'clsx';
import React, { memo, useCallback, useRef, useState, useMemo } from 'react';
import { NumericFormat, NumberFormatValues } from 'react-number-format';
import { useTranslation } from 'react-i18next';

import { PasswordListErrorsType } from '_types';

import ErrorCloud from 'app/components/ErrorCloud/ErrorCloud';

import '../style.scss';

type NumericInputProps = {
  value: number | null | undefined;
  onChange: Function;
  placeholder: string;
  thousandSeparator?: string;
  prefix?: string;
  allowNegative?: boolean;
  autocomplete?: boolean;
  disabled?: boolean;
  maxLength?: number;
  readonly?: boolean;
  isRequired?: boolean;
  isRequiredErrorText?: string;
  error?: boolean;
  errorText?: string | null;
  errorList?: PasswordListErrorsType[] | undefined;
  errorWithFocus?: boolean;
  handleFocus?: { inputFocus: boolean | null; setInputFocus: Function };
};

const NumericInput: React.FC<NumericInputProps> = ({
  autocomplete,
  disabled,
  maxLength,
  placeholder,
  thousandSeparator,
  prefix,
  allowNegative = true,
  isRequired = false,
  isRequiredErrorText,
  readonly,
  value,
  onChange,
  error,
  errorText,
  errorList,
  errorWithFocus,
  handleFocus,
}) => {
  const { t } = useTranslation();
  const inputRef = useRef<any | null>(null);

  const [focus, setFocus] = useState<boolean>(false);

  const onChangeValue = useCallback((values: NumberFormatValues) => onChange(values.floatValue), [maxLength, onChange]);

  const handleStateEvent = useCallback(
    (isFocus: boolean) => () => {
      handleFocus?.setInputFocus(!isFocus);
      setFocus(isFocus);
    },
    [handleFocus],
  );
  const onFocus = useMemo(() => handleStateEvent(true), [handleStateEvent]);
  const onBlur = useMemo(() => handleStateEvent(false), [handleStateEvent]);

  const onWheelPreventChange = useCallback(event => {
    event.target.blur();
    event.stopPropagation();
  }, []);

  const isRequiredErrorTextToDisplay = useMemo(() => isRequiredErrorText || t('validation:field_required'), [t]);
  const errorToDisplay = (error && errorText) || (isRequired && !value && isRequiredErrorTextToDisplay) || null;

  return (
    <div
      className={clsx('entry_field', {
        error: error && !focus,
        focus,
      })}
    >
      <NumericFormat
        displayType="input"
        inputMode="numeric"
        maxLength={maxLength}
        thousandsGroupStyle="thousand"
        thousandSeparator={thousandSeparator}
        prefix={prefix}
        allowNegative={allowNegative}
        autoComplete={autocomplete ? 'on' : 'off'}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readonly}
        value={value}
        onValueChange={onChangeValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onWheel={onWheelPreventChange}
        getInputRef={inputRef}
      />

      {errorToDisplay && (errorWithFocus || !focus) && <ErrorCloud text={errorToDisplay} list={errorList} />}
    </div>
  );
};

export default memo(NumericInput);
