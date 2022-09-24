import constants from '@/theme/utilities/constants';

export interface IScenario extends React.PropsWithChildren {
  title?: string;
  width?: number;
  height?: number;
  color?: string;
  focused?: boolean;
  onPress?: () => void;
  Icon?: React.ElementType;
  bg?: keyof typeof constants.COLORS;
  textColor?: keyof typeof constants.COLORS;
  error?: { message: string; toggle: boolean };
}
