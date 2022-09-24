import { TextInputProps } from 'react-native';
import { UseControllerProps } from 'react-hook-form';

export type InputProps<T> = TextInputProps &
  UseControllerProps<T> & {
    label: string;
    inputHelperText?: string;
    isPasswordInput?: boolean;
  };
