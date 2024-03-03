import { ValidationError, number, object, string } from 'yup';
import { isArray } from 'lodash';

export const minimumCostFormValidation = object({
  costInIndia: number().required('validation:field_required').positive('validation:should_be_positive_number'),
  costInSrilanka: number().required('validation:field_required').positive('validation:should_be_positive_number'),
  transportCostPer10Blocks: number()
    .required('validation:field_required')
    .positive('validation:should_be_positive_number'),
  unitsOrdered: number()
    .required('validation:field_required')
    .positive('validation:should_be_positive_number')
    .integer('validation:should_be_integer'),
  orderFrom: string().required('validation:field_required'),
});

export const constructErrorsObjectFromYupException = (t: Function, exception: ValidationError) => {
  const errors = {};

  if (!exception.inner) {
    return errors;
  }

  exception.inner.forEach(error => {
    if (!error.path) {
      return;
    }

    // eslint-disable-next-line no-useless-escape
    const pathParts = error.path.split(/[\.\[\]]/).filter(o => o);
    const partsCount = pathParts.length;

    let tempObj = errors;
    pathParts.forEach((p, index) => {
      const isNextPartNumber = !isNaN(parseInt(pathParts[index + 1], 10));
      const part = isNextPartNumber ? `${p}[]` : p;
      if (index === partsCount - 1) {
        const message = t(error.message);

        if (part in tempObj) {
          if (!isArray(tempObj[part])) {
            tempObj[part] = [tempObj[part]];
          }
          if (part !== 'firstName' && part !== 'lastName') {
            tempObj[part].push(message);
          }
        } else {
          tempObj[part] = message;
        }
      } else {
        if (!(part in tempObj)) {
          tempObj[part] = {};
        }
        tempObj = tempObj[part];
      }
    });
  });

  return errors;
};
