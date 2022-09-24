import { PropsWithChildren } from 'react';
import { FieldValues, DeepPartial, UseFormReturn } from 'react-hook-form';

export type FormHelpers = {
  setIsSubmitting: (arg0: boolean) => void;
};

export type CustomFieldValues<T = FieldValues> = T;

export type FormSubmitHandler = (arg0: FieldValues, arg1: FormHelpers) => void;

export interface IFormProps<T extends FieldValues> extends PropsWithChildren {
  loading?: boolean;
  error?: string | string[];
  canGoToNextStep: boolean;
  submitButtonTitle?: string;
  defaultValues: DeepPartial<T>;
  onSubmit: (data: T, helpers: UseFormReturn<T>) => void;
}
