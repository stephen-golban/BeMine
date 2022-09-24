import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const SpaceIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2421" transform="translate(-868.969 -2601)">
        <Circle
          data-name="Ellipse 91"
          cx={106.532}
          cy={106.532}
          transform="translate(868.969 2601)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G data-name="Group 2318" transform="translate(899.969 2645)">
          <Path
            data-name="Path 179"
            d="M21.664 82.866c12.823-17.348 88.127-45.589 109.3-40.938l7.35-2.668c-5.083-12.665-44.069-.678-67.565 7.8-15.842 5.925-30.316 12.757-40.758 19.245-12.6 7.825-17.58 13.933-15.674 19.225z"
            fill="#cc6484"
          />
          <Circle
            data-name="Ellipse 46"
            cx={47.646}
            cy={47.646}
            transform="translate(28.668 14.746)"
            r={47.646}
            fill="#73cbea"
          />
          <Circle
            data-name="Ellipse 47"
            cx={10.043}
            cy={10.043}
            transform="translate(24.953 104.698)"
            r={10.043}
            fill="#b3b3b3"
          />
          <Path
            data-name="Path 180"
            d="M34.996 104.696a10.056 10.056 0 00-3.767.733 10.044 10.044 0 010 18.621 10.044 10.044 0 103.767-19.354z"
            fill="gray"
          />
          <Path
            data-name="Path 181"
            d="M76.315 14.744q-1.9 0-3.767.149a47.646 47.646 0 010 94.994q1.863.146 3.767.149a47.646 47.646 0 000-95.291z"
            fill="#599fb2"
          />
          <Circle
            data-name="Ellipse 48"
            cx={15.315}
            cy={15.315}
            transform="translate(85.931 .001)"
            r={15.315}
            fill="#b3b3b3"
          />
          <Path
            data-name="Path 182"
            d="M101.247 0a15.276 15.276 0 00-3.767.47 15.318 15.318 0 010 29.693A15.316 15.316 0 10101.247.001z"
            fill="gray"
          />
          <Path
            data-name="Path 183"
            d="M130.962 41.929c-.824 1.554-4.307 5.435-14.308 11.386-19.311 11.675-54.605 24.893-76.845 28.76-11.363 2.058-16.509 1.422-18.143.793l-7.35 2.665c1.545 4.388 7.2 5.521 12.611 5.461 25.1-.3 72.986-18.235 95.712-32.5 12.6-7.825 17.577-13.933 15.674-19.228z"
            fill="#ff7b9e"
          />
          <Path
            data-name="Path 184"
            d="M28.421 30.966a8.142 8.142 0 00-5.51 5.51.345.345 0 01-.661 0 8.17 8.17 0 00-5.535-5.513.346.346 0 010-.661 8.209 8.209 0 005.535-5.521.345.345 0 01.661 0 8.174 8.174 0 005.513 5.518.345.345 0 01-.003.667z"
            fill="#73cbea"
          />
          <Path
            data-name="Path 185"
            d="M21.445 50.794a14.6 14.6 0 00-9.886 9.886.623.623 0 01-1.191 0 14.649 14.649 0 00-9.929-9.889.623.623 0 010-1.191 14.7 14.7 0 009.929-9.9.623.623 0 011.191 0 14.66 14.66 0 009.886 9.9.621.621 0 010 1.194z"
            fill="#73cbea"
          />
          <Path
            data-name="Path 186"
            d="M149.881 86.258a15.044 15.044 0 00-10.189 10.192.641.641 0 01-1.225 0 15.113 15.113 0 00-10.235-10.192.64.64 0 010-1.225 15.171 15.171 0 0010.235-10.207.641.641 0 011.225 0 15.106 15.106 0 0010.192 10.207.64.64 0 01-.003 1.225z"
            fill="#73cbea"
          />
        </G>
      </G>
    </Svg>
  );
};

export default SpaceIcon;
