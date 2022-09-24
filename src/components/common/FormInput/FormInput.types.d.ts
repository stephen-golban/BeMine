import { Control, FieldPath, FieldValues } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

export type FormInputProps = {
  control?: Control<any, any> | undefined;
  name: FieldPath<FieldValues>;
  rules?: object;
  placeholder?: string;
  secureTextEntry?: boolean | undefined;
  inputStyles?: object;
  label?: string;
};
