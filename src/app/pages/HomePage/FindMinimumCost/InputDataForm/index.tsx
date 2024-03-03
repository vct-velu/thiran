import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { MinimumCostFormType } from '_types';

import SelectButtonSimple from 'app/components/SelectButton/SelectButtonSimple';
import NumericInput from 'app/components/InputComponents/NumericInput';

import { useAppDispatch, useAppSelector } from 'store/configureStore';

import { minCostFormData } from 'redux/selectors/minCost';
import { changeFormDataAction } from 'redux/reducers/minCost';
import { calculateMinimumCost } from 'redux/actions/minCost';

import { constructErrorsObjectFromYupException, minimumCostFormValidation } from 'utils/validation';

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

  const handleSubmit = useCallback(async () => {
    if (formData) {
      await dispatch(calculateMinimumCost(formData));
    }
  }, [formData, dispatch]);

  const validateFn = useCallback(
    async (values: MinimumCostFormType) => {
      try {
        await minimumCostFormValidation.validate(formData, { abortEarly: false });
      } catch (e: any) {
        return constructErrorsObjectFromYupException(t, e);
      }
      return null;
    },
    [t, formData],
  );

  type RegistrationSchemaErrors = { [k in keyof MinimumCostFormType]?: string | string[] };
  type RegistrationSchemaTouched = { [k in keyof MinimumCostFormType]?: boolean };
  type FormikRenderArgs = { errors: RegistrationSchemaErrors; touched: RegistrationSchemaTouched };

  return (
    <div className="form_wrapper">
      <Formik initialValues={formData} validate={validateFn} onSubmit={handleSubmit}>
        {({ errors, touched }: FormikRenderArgs) => (
          <Form className="form_wrapper">
            <div className="form_items">
              <div className="item">
                <p className="title">{t('home_page.min_cost.cost_of_ipod')}</p>
                <div className="fields">
                  <div className="field">
                    <p className="label">{t('home_page.min_cost.in_india')}</p>
                    <Field
                      type="number"
                      name="costInIndia"
                      placeholder={t('home_page.min_cost.please_specify')}
                      onChange={changeFormData('costInIndia')}
                      error={errors.costInIndia}
                      allowNegative={false}
                      component={NumericInput}
                    />
                    <ErrorMessage name="costInIndia" component="div" className="error-message" />
                  </div>
                  <div className="field">
                    <p className="label">{t('home_page.min_cost.in_srilanka')}</p>
                    <Field
                      type="number"
                      name="costInSrilanka"
                      placeholder={t('home_page.min_cost.please_specify')}
                      onChange={changeFormData('costInSrilanka')}
                      error={errors.costInSrilanka}
                      allowNegative={false}
                      component={NumericInput}
                    />
                    <ErrorMessage name="costInSrilanka" component="div" className="error-message" />
                  </div>
                </div>
              </div>

              <div className="item">
                <p className="title">{t('home_page.min_cost.exporting_cost')}</p>
                <p className="sub_title">{t('home_page.min_cost.trans_block')}</p>
                <Field
                  type="number"
                  title="transportCostPer10Blocks"
                  name="transportCostPer10Blocks"
                  placeholder={t('home_page.min_cost.please_specify')}
                  onChange={changeFormData('transportCostPer10Blocks')}
                  error={errors.transportCostPer10Blocks}
                  allowNegative={false}
                  component={NumericInput}
                />
                <ErrorMessage name="transportCostPer10Blocks" component="div" className="error-message" />
              </div>

              <div className="item">
                <p className="title">{t('home_page.min_cost.order_from')}</p>
                <div className="country_list">
                  <Field
                    type="select"
                    selected={formData?.orderFrom === 'India'}
                    value="India"
                    title="India"
                    onClick={changeFormData('orderFrom')}
                    component={SelectButtonSimple}
                    name="orderFrom"
                  />
                  <Field
                    type="select"
                    name="orderFrom"
                    value="Srilanka"
                    onClick={changeFormData('orderFrom')}
                    selected={formData?.orderFrom === 'Srilanka'}
                    component={SelectButtonSimple}
                    title="Srilanka"
                  />
                </div>
                <ErrorMessage name="orderFrom" component="div" className="error-message" />
              </div>

              <div className="item">
                <p className="title">{t('home_page.min_cost.how_many')}</p>
                <Field
                  type="number"
                  name="unitsOrdered"
                  placeholder={t('home_page.min_cost.please_specify')}
                  onChange={changeFormData('unitsOrdered')}
                  error={errors.unitsOrdered}
                  // errorText={errors.unitsOrdered}
                  allowNegative={false}
                  component={NumericInput}
                />
                <ErrorMessage name="unitsOrdered" component="div" className="error-message" />
              </div>
              <button type="submit">{t('submit')}</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputDataForm;
