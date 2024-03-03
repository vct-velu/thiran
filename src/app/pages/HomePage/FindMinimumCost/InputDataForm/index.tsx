import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { MinimumCostFormType } from '_types';

import SelectButtonSimple from 'app/components/SelectButton/SelectButtonSimple';
import NumericInput from 'app/components/InputComponents/NumericInput';

import { useAppDispatch, useAppSelector } from 'store/configureStore';

import { minCostFormData } from 'redux/selectors/minCost';
import { changeFormDataAction } from 'redux/reducers/minCost';
import { calculateMinimumCost } from 'redux/actions/minCost';

import './style.scss';

interface PurchaseFormProps {}
const InputDataForm: React.FC<PurchaseFormProps> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useAppSelector(minCostFormData);

  const changeFormData = useCallback(
    (key: keyof MinimumCostFormType) => (value: any) => {
      dispatch(changeFormDataAction({ [key]: value }));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      console.log('submit');
      if (formData) {
        await dispatch(calculateMinimumCost(formData));
      }
    },
    [formData, dispatch],
  );

  return (
    <div className="form_wrapper">
      <div className="form_items">
        <div className="item">
          <p className="title">{t('home_page.min_cost.cost_of_ipod')}</p>
          <div className="fields">
            <div className="field">
              <p className="lable">{t('home_page.min_cost.in_india')}</p>
              <NumericInput
                placeholder={t('home_page.min_cost.please_specify')}
                value={formData?.costInIndia}
                onChange={changeFormData('costInIndia')}
              />
            </div>
            <div className="field">
              <p className="lable">{t('home_page.min_cost.in_srilanka')}</p>
              <NumericInput
                placeholder={t('home_page.min_cost.please_specify')}
                value={formData?.costInSrilanka}
                onChange={changeFormData('costInSrilanka')}
              />
            </div>
          </div>
        </div>
        <div className="item">
          <p className="title">{t('home_page.min_cost.exporting_cost')}</p>
          <p className="sub_title">{t('home_page.min_cost.trans_block')}</p>
          <NumericInput
            placeholder={t('home_page.min_cost.please_specify')}
            value={formData?.transportCostPer10Blocks}
            onChange={changeFormData('transportCostPer10Blocks')}
          />
        </div>
        <div className="item">
          <p className="title">{t('home_page.min_cost.order_from')}</p>
          <div className="country_list">
            <SelectButtonSimple
              selected={formData?.orderFrom === 'India'}
              value="India"
              type="select"
              title="India"
              onClick={changeFormData('orderFrom')}
            />
            <SelectButtonSimple
              selected={formData?.orderFrom === 'Srilanka'}
              value="Srilanka"
              type="select"
              title="Srilanka"
              onClick={changeFormData('orderFrom')}
            />
          </div>
        </div>

        <div className="item">
          <p className="title">{t('home_page.min_cost.how_many')}</p>
          <NumericInput
            placeholder={t('home_page.min_cost.please_specify')}
            value={formData?.unitsOrdered}
            onChange={changeFormData('unitsOrdered')}
          />
        </div>
      </div>
      <button onClick={handleSubmit} disabled={false}>
        {t('submit')}
      </button>
    </div>
  );
};

export default InputDataForm;
