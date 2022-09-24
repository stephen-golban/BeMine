import { SvgProps } from 'react-native-svg';

export type IconProps<T = object> = {
  color?: string;
} & SvgProps &
  T;
