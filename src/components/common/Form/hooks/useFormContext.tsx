import { FieldValues, useFormContext } from 'react-hook-form';

export const useTypedFormContext = <T extends FieldValues = FieldValues>() => {
  return useFormContext<T>();
};
