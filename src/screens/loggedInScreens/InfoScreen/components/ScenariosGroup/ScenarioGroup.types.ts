import { IconProps } from '@/components/icons/types/Icon';
import { FC } from 'react';

export interface ScenarioGroupProps {
  bordered: boolean;
  data: {
    selected: boolean;
    name: string;
    icon: FC<IconProps<object>>;
  }[];
}
