import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const RestaurantIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2437" transform="translate(-514.301 -3060)">
        <Circle
          data-name="Ellipse 65"
          cx={106.532}
          cy={106.532}
          transform="translate(514.301 3060)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G transform="translate(554.873 3088.37)">
          <Path
            data-name="Path 381"
            d="M85.587 108.81l26.489-18.921a6.713 6.713 0 019.367 1.556c.106.148.206.3.3.456a6.714 6.714 0 01-1.873 8.934l-28.112 23.3a13.885 13.885 0 01-8.862 3.195h-57.5V99.549l11.309-9.429a9.262 9.262 0 015.929-2.146h30.217a5.787 5.787 0 015.788 5.788 5.787 5.787 0 01-5.788 5.788H57.805a4.629 4.629 0 00-4.63 4.63 4.629 4.629 0 004.63 4.63h27.781z"
            fill="#fec9a3"
          />
          <Path data-name="Rectangle 1592" d="M0 97.234h25.394v39.357H0z" fill="#4398d1" />
          <Circle
            data-name="Ellipse 78"
            cx={4.63}
            cy={4.63}
            r={4.63}
            transform="translate(6.945 118.07)"
            fill="#e5e5e5"
          />
          <Path
            data-name="Path 382"
            d="M2.315 74.088h134.276A13.89 13.89 0 01122.7 87.979H16.206A13.89 13.89 0 012.315 74.088z"
            fill="#7c7c7c"
          />
          <Path
            data-name="Path 383"
            d="M127.331 74.084H11.576v-2.315a57.878 57.878 0 0157.877-57.877 57.878 57.878 0 0157.877 57.877z"
            fill="#bebebe"
          />
          <G data-name="Group 2290">
            <Path
              data-name="Path 384"
              d="M30.794 46.32l-3.864-2.547a51.365 51.365 0 014.454-5.788l3.461 3.074a46.952 46.952 0 00-4.051 5.261z"
              fill="#fff"
            />
            <Path
              data-name="Path 385"
              d="M37.782 38.026l-3.169-3.373a50.718 50.718 0 0134.841-13.819v4.63a46.108 46.108 0 00-31.672 12.562z"
              fill="#fff"
            />
          </G>
          <Path data-name="Path 386" d="M76.403 0h-13.9v4.63h4.63v9.26h4.63V4.63h4.63z" fill="#7c7c7c" />
          <Path
            data-name="Path 387"
            d="M103.139 74.088a151.558 151.558 0 01-40.864 13.891h60.424a13.89 13.89 0 0013.892-13.891z"
            fill="#7c7c7c"
          />
          <Path
            data-name="Path 388"
            d="M127.33 71.768a57.706 57.706 0 00-18.157-42.078c-16.238 23.176-45.635 37.021-66.55 44.39h84.707z"
            fill="#9f9f9f"
          />
          <G data-name="Group 2291">
            <Path
              data-name="Path 389"
              d="M122.078 92.604a6.371 6.371 0 00-.336-.694 6.714 6.714 0 00-9.209-2.311 6.067 6.067 0 00-.456.3l-3.8 2.706h13.8z"
              fill="#f7bb8f"
            />
            <Path
              data-name="Path 390"
              d="M78.524 92.604a5.787 5.787 0 00-5.67-4.63H42.638a9.261 9.261 0 00-5.929 2.146l-2.98 2.484h44.795z"
              fill="#f7bb8f"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default RestaurantIcon;
