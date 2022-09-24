import React from 'react';

import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const HomeOptionIcon: React.FC<IconProps> = (props) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2419" transform="translate(-878.5 -3386)">
        <Circle
          data-name="Ellipse 67"
          cx={106.532}
          cy={106.532}
          transform="translate(878.5 3386)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G opacity={0.85}>
          <Path data-name="Rectangle 10" d="M1018.046 3445.941h15.098v26.352h-15.098z" fill="#f05540" />
          <Path data-name="Rectangle 11" d="M1012.282 3432.49h26.627v14.274h-26.627z" fill="#f3705a" />
          <Path
            data-name="Path 231"
            d="M931.029 3498.094v60.665h107.6v-60.665l-53.8-53.8c-20.86 21.137-32.663 32.94-53.8 53.8z"
            fill="#bae3e8"
          />
          <Path
            data-name="Path 232"
            d="M1038.909 3498.094l-53.8-53.8c-10.709 10.431-18.944 18.666-27.18 26.9l-26.9 26.9v12.353l53.8-53.8 53.8 53.8v1.647-14h.274z"
            fill="#88b2b7"
          />
          <Path
            data-name="Path 233"
            d="M975.224 3558.761h-32.391v-31.842a16.225 16.225 0 0116.2-16.2 16.225 16.225 0 0116.2 16.2z"
            fill="#415a6b"
          />
          <Path data-name="Rectangle 12" d="M984.832 3510.723h42.273v37.058h-42.273z" fill="#344a5e" />
          <G data-name="Group 111">
            <Path data-name="Rectangle 13" d="M989.224 3515.115h14.549v28.274h-14.549z" fill="#8ad7f8" />
            <Path data-name="Rectangle 14" d="M1008.165 3515.115h14.549v28.274h-14.549z" fill="#8ad7f8" />
          </G>
          <Path
            data-name="Path 234"
            d="M1048.791 3486.841l-57.371-57.37a8.956 8.956 0 00-12.353 0l-57.096 57.37a8.956 8.956 0 000 12.353 8.956 8.956 0 0012.353 0l51.057-51.057 51.057 51.057a8.735 8.735 0 0012.353-12.353z"
            fill="#f3705a"
          />
        </G>
      </G>
    </Svg>
  );
};

export default HomeOptionIcon;
