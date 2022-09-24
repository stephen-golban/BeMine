import * as React from 'react';
import Svg, { Defs, G, Path } from 'react-native-svg';
import { IconProps } from './types/Icon';

const InfoIcon: React.FC<IconProps<{ smallCircleBg?: string; count?: number }>> = ({ color = '#fff', ...props }) => {
  return (
    <Svg width={130.357} height={130.357} viewBox="0 0 130.357 130.357" {...props}>
      <Defs></Defs>
      <G data-name="Icon feather-info">
        <G filter="url(#u6pbm7wuka)">
          <Path
            data-name="Path 193"
            d="M105.357 54.179A51.179 51.179 0 1 1 54.179 3a51.179 51.179 0 0 1 51.179 51.179z"
            transform="translate(11 8)"
            strokeWidth="10px"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <G filter="url(#s128ka2tob)">
          <Path
            data-name="Path 194"
            d="M18 43.369V18"
            transform="translate(47.18 43.74)"
            strokeWidth="10px"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <G filter="url(#33n6ssbgxc)">
          <Path
            data-name="Path 195"
            d="M18 12h0"
            transform="translate(47.18 26.15)"
            strokeWidth="15px"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
};

export default InfoIcon;
