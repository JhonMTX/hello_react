import { ChangeEvent } from "react";
import { RefCallBack } from "react-hook-form";
import { vacationFormSchema } from "./forms/vacation-form.constants";
import { z } from "zod";

export type BaseProps = {
  name: string;
  elementRef: RefCallBack;
  error: string;
};

export type Input = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onChangeInput?: (value: string) => void;
} & BaseProps;

export type InputProps = Partial<Input>;

export type CheckboxProps = {
  onChangeCheck?: (isChecked: boolean) => void;
} & InputProps;

export type DropdownProps = {
  onChangeDropdown?: (value: string) => void;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
} & Partial<BaseProps>;

export type VacationFormValues = z.infer<typeof vacationFormSchema>;
export type OpeningDays = {
  [key: string]: string;
};
