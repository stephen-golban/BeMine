import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const HeartIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2425" transform="translate(-868.969 -1363)">
        <Circle
          data-name="Ellipse 67"
          cx={106.532}
          cy={106.532}
          transform="translate(868.969 1363)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G data-name="Group 89">
          <Path
            data-name="Path 176"
            d="M979.71 1424.503l-4.163 4.183-4.183-4.163a35.4 35.4 0 00-51.906 48.074c1.282 1.515-2.536-2.358 47.956 47.9a11.8 11.8 0 0016.691-.037l45.79-46a35.239 35.239 0 0010.236-22.95c1.847-32.366-37.462-50.073-60.421-27.007z"
            fill="#ff7b9e"
          />
          <Path
            data-name="Path 177"
            d="M1030.662 1425.317a38.115 38.115 0 012.014 14.809 37.7 37.7 0 01-10.95 24.546l-48.982 49.209a12.548 12.548 0 01-8.305 3.658l2.975 2.961a11.8 11.8 0 0016.691-.037l45.79-46a35.239 35.239 0 0010.239-22.948 34.493 34.493 0 00-9.472-26.198z"
            fill="#cc6484"
          />
          <Path
            data-name="Path 178"
            d="M926.762 1450.769a2.866 2.866 0 01-2.869-2.869 21.638 21.638 0 0136.314-15.9 2.87 2.87 0 01-3.9 4.214 15.9 15.9 0 00-26.68 11.685 2.868 2.868 0 01-2.865 2.87z"
            fill="#fff"
            opacity={0.5}
          />
        </G>
      </G>
    </Svg>
  );
};

export default HeartIcon;
