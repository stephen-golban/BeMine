import { useTheme } from '@/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const SuccessIcon: React.FC<IconProps> = (props) => {
  const { colors } = useTheme();
  const { color = colors.darkSkyBlue, ...rest } = props;
  return (
    <Svg width={90.261} height={76.759} viewBox="0 0 90.261 76.759" {...rest}>
      <Path
        data-name="Icon feather-check"
        d="M81.12 9.142L31.635 70.259 9.142 42.479"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="13px"
      />
    </Svg>
  );
};

export default SuccessIcon;
