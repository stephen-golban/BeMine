import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const MovieIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2428" transform="translate(-868.969 -329)">
        <Circle
          data-name="Ellipse 76"
          cx={106.532}
          cy={106.532}
          transform="translate(868.969 329)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G opacity={0.7}>
          <G data-name="Group 106">
            <Path data-name="Path 219" d="M915.674 472.153v14.819h119.05v-14.819h-119.05z" fill="#dfe7f4" />
            <Path data-name="Path 220" d="M975.199 383.236h-59.525v14.819h119.05v-14.819z" fill="#dfe7f4" />
          </G>
          <Path data-name="Path 221" d="M975.199 383.236h59.525v14.819h-59.525z" fill="#c7cfe1" />
          <Path data-name="Path 222" d="M975.199 472.153h59.525v14.819h-59.525z" fill="#c7cfe1" />
          <Path data-name="Path 223" d="M975.199 398.055h-55.82v74.1h111.64v-74.1z" fill="#ff641a" />
          <Path data-name="Path 224" d="M975.199 398.055h55.82v74.1h-55.82z" fill="#f03800" />
          <G data-name="Group 109">
            <G data-name="Group 107">
              <Path
                data-name="Path 225"
                d="M911.969 468.448v22.229h126.459v-22.229H911.969zm20.006 14.819h-12.596v-7.41h12.6zm19.759 0h-12.349v-7.41h12.35zm19.759 0h-12.349v-7.41h12.35zm46.928-7.41h12.6v7.41h-12.6zm-19.759 0h12.35v7.41h-12.349zm-19.759 0h12.35v7.41h-12.349z"
                fill="#404a80"
              />
              <Path
                data-name="Path 226"
                d="M975.199 379.531h-63.23v22.229h126.459v-22.229zm-43.224 14.819h-12.596v-7.409h12.6zm19.759 0h-12.349v-7.409h12.35zm19.759 0h-12.349v-7.409h12.35zm19.759 0h-12.348v-7.409h12.35zm19.76 0h-12.349v-7.409h12.35zm20.006 0h-12.62v-7.409h12.621z"
                fill="#404a80"
              />
            </G>
            <G data-name="Group 108">
              <Path
                data-name="Path 227"
                d="M991.253 394.35h-12.354v-7.409h12.35zm19.76 0h-12.35v-7.409h12.35zm-35.814-14.819v22.229h63.23v-22.229zm55.82 14.819h-12.62v-7.409h12.62z"
                fill="#283366"
              />
              <Path
                data-name="Path 228"
                d="M1038.429 468.448h-63.23v22.229h63.23zm-47.175 14.819h-12.355v-7.41h12.35zm19.759 0h-12.35v-7.41h12.35zm20.006 0h-12.6v-7.41h12.6z"
                fill="#283366"
              />
            </G>
          </G>
          <Path
            data-name="Path 229"
            d="M975.199 420.772l-11.115-7.409v43.481l11.115-7.409 21.5-14.331z"
            fill="#f0f7ff"
          />
          <Path data-name="Path 230" d="M975.199 420.773v28.663l21.5-14.331z" fill="#dfe7f4" />
        </G>
      </G>
    </Svg>
  );
};

export default MovieIcon;
