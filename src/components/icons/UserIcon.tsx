import * as React from 'react';
import Svg, { G, Path, Ellipse } from 'react-native-svg';

import { IconProps } from './types/Icon';

const UserIcon: React.FC<IconProps> = ({ color = '#fff', ...props }) => {
  return (
    <Svg width={76.825} height={85.777} viewBox="0 0 76.825 85.777" {...props}>
      <G transform="translate(3.501 3.5)">
        <Path
          data-name="Path 192"
          d="M69.824 78.777v-8.728a17.456 17.456 0 00-17.456-17.457H17.455A17.456 17.456 0 00-.001 70.049v8.728"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7px"
        />
        <Ellipse
          data-name="Ellipse 53"
          cx={18.069}
          cy={17.424}
          rx={18.069}
          ry={17.424}
          transform="translate(17.484)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7px"
        />
      </G>
    </Svg>
  );
};

export default UserIcon;
