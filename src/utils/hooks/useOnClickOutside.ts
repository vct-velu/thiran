import { useEffect, useRef } from 'react';

import { buttonClickEventEscapeButtonNumber } from '_constants/otherConstants';

const useOnClickOutside = (enabled: boolean, onOutsideClick: (event) => void) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!enabled) {
      return () => {};
    }

    const handleClickOutside = event => {
      if (!ref) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick(event);
      }
    };

    const escapeButtonClick = event => {
      if (event.which === buttonClickEventEscapeButtonNumber) {
        onOutsideClick(event);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', escapeButtonClick);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', escapeButtonClick);
    };
  }, [enabled, onOutsideClick]);

  return { ref };
};

export default useOnClickOutside;
