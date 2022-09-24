import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './types/Icon';

const RejectIcon: React.FC<IconProps> = ({ color = '#ff7bac', ...props }) => {
  return (
    <Svg width={71.724} height={63.447} viewBox="0 0 71.724 63.447" {...props}>
      <G data-name="Group 2454">
        <Path
          data-name="Icon feather-chevron-left"
          d="M29.238 54.963L6 31.724 29.238 8.486M63.238 54.963L40 31.724 63.238 8.486"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="12px"
        />
      </G>
    </Svg>
  );
};

export default RejectIcon;
