import { IconProps } from '@/components/icons/types/Icon';
import { FC } from 'react';

export interface IScenario {
  selected: boolean;
  name: string;
  icon: FC<IconProps>;
}
