import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const SunsetIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2410" transform="translate(-146.967 -1363)">
        <Circle
          data-name="Ellipse 67"
          cx={106.532}
          cy={106.532}
          transform="translate(146.967 1363)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G transform="translate(115.902 1293.247)" opacity={0.8}>
          <Path
            data-name="Path 431"
            d="M80.055 212.883l-1.076-1.571a70.456 70.456 0 11116.331 0l-1.076 1.571H80.055z"
            fill="#ffe783"
          />
          <Path data-name="Path 432" d="M177.855 211.406a57.607 57.607 0 10-81.875 0z" fill="#ffa000" />
          <Path data-name="Path 433" d="M97.186 212.594h79.462a57.607 57.607 0 10-79.462 0z" fill="#ffc84d" />
          <Path data-name="Path 434" d="M126.32 212.593h21.194a43.029 43.029 0 10-21.194 0z" fill="#ffa300" />
          <Circle
            data-name="Ellipse 79"
            cx={25.947}
            cy={25.947}
            r={25.947}
            transform="translate(110.972 144.933)"
            fill="#ff7f00"
          />
          <G data-name="Group 2296">
            <Path
              data-name="Path 435"
              d="M215.73 216.045H59.46a3.387 3.387 0 010-6.774h156.27a3.387 3.387 0 110 6.774z"
              fill="#db6505"
            />
            <Path
              data-name="Path 436"
              d="M140.756 239.079H87.01a3.387 3.387 0 110-6.774h53.746a3.387 3.387 0 010 6.774z"
              fill="#db6505"
            />
            <Path
              data-name="Path 437"
              d="M187.724 239.079H159.5a3.387 3.387 0 110-6.774h28.224a3.387 3.387 0 110 6.774z"
              fill="#db6505"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default SunsetIcon;
