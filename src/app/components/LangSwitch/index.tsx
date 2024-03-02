import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { platformLanguageChoices } from '_constants/headerConstants';

import useOnClickOutside from 'utils/hooks/useOnClickOutside';

import CheckedIcon from '../Icons/CheckedIcon';
import WorldIcon from '../Icons/WorldIcon';

import './style.scss';

interface LangSwitchProps {
  classNames?: string;
}

const LangSwitch: React.FC<LangSwitchProps> = ({ classNames }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string>(localStorage.getItem('i18nextLng') || 'en');
  const [isOpenLang, setIsOpenLang] = useState<boolean>(false);

  const handleLangModal = useCallback(() => setIsOpenLang(false), []);

  const changeLang = useCallback(
    lng => {
      i18n.changeLanguage(lng);
      setCurrentLang(lng);
      setIsOpenLang(false);
    },
    [i18n],
  );

  const { ref } = useOnClickOutside(isOpenLang, handleLangModal);

  return (
    <div className={clsx('lang_switch', classNames)}>
      <div className="lang_switch__btn" onClick={() => setIsOpenLang(!isOpenLang)}>
        <div className={clsx('lang_switch__btn_icon', { active: isOpenLang })}>
          <WorldIcon height="20" />
        </div>
      </div>
      {isOpenLang && (
        <div className={clsx('modal_block', 'lang_switch__wrapper')} ref={ref}>
          {platformLanguageChoices.map(elem => (
            <div key={`${elem.value}`} onClick={() => changeLang(elem.value)}>
              {elem.translate} ({elem.initName})
              {currentLang === elem.value && <CheckedIcon className="lang_switch__wrapper_arrow" color={'#676767'} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(LangSwitch);
