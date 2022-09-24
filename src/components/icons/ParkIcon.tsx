import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const ParkIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2409" transform="translate(-146.969 -1053)">
        <Circle
          data-name="Ellipse 65"
          cx={106.532}
          cy={106.532}
          transform="translate(146.969 1053)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G data-name="Group 2295">
          <Path
            data-name="Path 419"
            d="M251.853 1162.06a38.264 38.264 0 10-38.163-38.259 38.285 38.285 0 0038.163 38.259z"
            fillRule="evenodd"
            fill="#78c2a4"
          />
          <Path
            data-name="Path 420"
            d="M251.853 1162.059a38.284 38.284 0 0022.772-68.969 38.207 38.207 0 01-53.341 53.623 38.1 38.1 0 0030.569 15.346z"
            fill="#66b394"
            fillRule="evenodd"
          />
          <Path
            data-name="Path 421"
            d="M268.959 1162.174a2.1 2.1 0 114.195 0v20.592a2.1 2.1 0 11-4.195 0zm0 28.164a2.1 2.1 0 114.195 0v10.117a2.1 2.1 0 11-4.195 0zm37.818-28.164a2.1 2.1 0 114.194 0v20.592a2.1 2.1 0 11-4.194 0zm0 28.164a2.1 2.1 0 114.194 0v10.117a2.1 2.1 0 11-4.194 0z"
            fill="#917d52"
          />
          <G data-name="Group 2294">
            <Path data-name="Path 422" d="M267.675 1164.923h44.682v10.276h-44.682z" fill="#b2a17d" fillRule="evenodd" />
            <Path
              data-name="Path 423"
              d="M264.793 1190.337h50.439c.58 0 1.058-.635 1.058-1.4v-4.766c0-.769-.478-1.4-1.058-1.4h-50.439c-.58 0-1.052.634-1.052 1.4v4.766c0 .769.472 1.4 1.052 1.4z"
              fill="#a39474"
              fillRule="evenodd"
            />
            <Path data-name="Path 424" d="M267.675 1170.008h44.639v5.146h-44.639z" fill="#a39474" fillRule="evenodd" />
          </G>
          <Path
            data-name="Path 425"
            d="M249.513 1123.795a2.336 2.336 0 114.671 0v13.289l8.521-6.746a2.326 2.326 0 112.887 3.647l-11.408 9.033v61.281a2.336 2.336 0 01-4.671 0v-80.504z"
            fill="#917d52"
          />
          <Path
            data-name="Path 426"
            d="M211.88 1168.982a28.573 28.573 0 10-28.573-28.573 28.627 28.627 0 0028.573 28.573z"
            fill="#b3e59f"
            fillRule="evenodd"
          />
          <Path
            data-name="Path 427"
            d="M211.88 1168.982a28.57 28.57 0 0015.929-52.29 28.578 28.578 0 01-39.655 39.654 28.558 28.558 0 0023.726 12.636z"
            fill="#95d6a4"
            fillRule="evenodd"
          />
          <Path
            data-name="Path 428"
            d="M214.21 1149.115l5.4-4.274a2.326 2.326 0 112.887 3.647l-8.287 6.561v49.255a2.336 2.336 0 01-4.671 0v-63.895a2.336 2.336 0 014.671 0z"
            fill="#917d52"
          />
          <Path
            data-name="Path 429"
            d="M192.755 1222.325h121.837a11.792 11.792 0 000-23.584H192.755a11.792 11.792 0 000 23.584z"
            fill="#95d6a4"
            fillRule="evenodd"
          />
          <Path
            data-name="Path 430"
            d="M180.967 1210.53a11.827 11.827 0 0011.788 11.8h121.837a11.827 11.827 0 0011.788-11.8 11.634 11.634 0 00-.662-3.894 11.834 11.834 0 01-11.126 7.9H192.755a11.843 11.843 0 01-11.126-7.906 11.864 11.864 0 00-.662 3.9z"
            fillRule="evenodd"
            fill="#78c2a4"
          />
        </G>
      </G>
    </Svg>
  );
};

export default ParkIcon;
