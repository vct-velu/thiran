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
  costInIndia: number | null;
  costInSrilanka: number | null;
  transportCostPer10Blocks: number | null;
  unitsOrdered: number | null;
  orderFrom: string | null;
};

export type MinimumCostResponseType = {
  minimumCost: number;
  unitsLeftInIndia: number;
  unitsLeftInSrilanka: number;
};
