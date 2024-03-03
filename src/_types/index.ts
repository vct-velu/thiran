export type TranslateValueType<T = string> = {
  name: string;
  value: T;
  icon?: JSX.Element;
  hint?: string;
};

export type DropDownErrorType = string | string[] | undefined | null;

export interface PasswordListErrorsType {
  isError: boolean;
  text: string;
}

export type MinimumCostFormType = {
  costInIndia: number;
  costInSrilanka: number;
  transportCostPer10Blocks: number;
  unitsOrdered: number;
  orderFrom: string;
};

export type MinimumCostResponseType = {
  minimumCost: number;
  unitsLeftInIndia: number;
  unitsLeftInSrilanka: number;
};
