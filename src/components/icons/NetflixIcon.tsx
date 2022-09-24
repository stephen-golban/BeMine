import * as React from 'react';
import Svg, { Defs, ClipPath, Path, G, Circle } from 'react-native-svg';

import { IconProps } from './types/Icon';

const NetflixIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path data-name="Rectangle 1593" d="M0 0h72.54v131.67H0z" fill="none" />
        </ClipPath>
      </Defs>
      <G data-name="Group 2418" transform="translate(-878.277 -3712.5)">
        <Circle
          data-name="Ellipse 74"
          cx={106.532}
          cy={106.532}
          transform="translate(878.277 3712.5)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G data-name="Group 2308" opacity={0.8}>
          <G data-name="Group 2307" transform="translate(948.857 3753)" clipPath="url(#a)">
            <Path
              data-name="Path 470"
              d="M46.675.104l-.052 29.1-.052 29.1-2.391-6.755v-.019l-3.1 64.774c3.048 8.591 4.676 13.181 4.694 13.2s1.75.121 3.845.225c6.339.312 14.2.987 20.177 1.732a13.689 13.689 0 002.65.191c.086-.069.1-29.686.086-65.831L72.481.104H46.675"
              fill="#b1060f"
            />
            <Path
              data-name="Path 471"
              d="M0 .017V65.8c0 36.181.035 65.814.086 65.866s2.286-.173 4.988-.468 6.425-.675 8.278-.831c2.84-.242 11.362-.779 12.332-.8.294 0 .312-1.473.346-27.868l.052-27.867 2.061 5.819c.312.9.416 1.178.727 2.061l3.1-64.758c-.658-1.853-.312-.883-1.057-3C28.386 6.807 26.239.762 26.153.485L25.979 0H0z"
              fill="#b1060f"
            />
            <Path
              data-name="Path 472"
              d="M0 .017l26.066 73.868v-.035l2.061 5.819c11.448 32.405 17.6 49.794 17.632 49.828.017.017 1.749.122 3.845.225 6.339.312 14.2.987 20.177 1.732a13.513 13.513 0 002.632.19L46.572 58.28v.02l-2.39-6.755c-2.338-6.6-3.9-11.015-13.3-37.583C28.352 6.807 26.2.762 26.118.485L25.945 0H12.972z"
              fill="#e50914"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default NetflixIcon;
