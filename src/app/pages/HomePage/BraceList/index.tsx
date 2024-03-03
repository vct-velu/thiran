import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import NumericInput from 'app/components/InputComponents/NumericInput';

import { generateBraces } from 'utils/generateBraceList';

import './style.scss';

const BraceList: React.FC = () => {
  const { t } = useTranslation();

  const [numBraces, setNumBraces] = useState<number>(1);
  const [generatedBraces, setGeneratedBraces] = useState<string[]>([]);

  const handleGenerateBraces = () => {
    const braces = generateBraces(numBraces);
    setGeneratedBraces(braces);
  };

  return (
    <div className="brace_list_container">
      <div className="braces_form">
        <p className="field">{t('home_page.brace_list.enter_number')}</p>
        <NumericInput
          placeholder={t('home_page.min_cost.please_specify')}
          value={numBraces}
          onChange={value => setNumBraces(value)}
        />
      </div>
      <button onClick={handleGenerateBraces}>{t('submit')}</button>
      <p className="display">{t('home_page.brace_list.generated_braces')}</p>
      <div className="display_content">
        {generatedBraces.map((brace, index) => (
          <div className="display_item" key={index}>
            {brace}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BraceList;
