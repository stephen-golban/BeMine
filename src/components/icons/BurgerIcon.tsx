import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const BurgerIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2433" transform="translate(-514.467 -1673)">
        <Circle
          data-name="Ellipse 84"
          cx={106.532}
          cy={106.532}
          transform="translate(514.467 1673)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G opacity={0.8}>
          <Path
            data-name="Path 336"
            d="M686.983 1802.913a34.73 34.73 0 01-34.677 34.677h-62.162a34.73 34.73 0 01-34.677-34.677h15.669l50.089-9.632 50.089 9.632z"
            fill="#fdbf00"
          />
          <Path
            data-name="Path 337"
            d="M686.983 1802.912a34.73 34.73 0 01-34.677 34.677h-31.081v-44.309l50.089 9.632z"
            fill="#ff9100"
          />
          <Path data-name="Path 338" d="M668.385 1802.913l-39.454 19.726-39.455-19.726 31.749-7.475z" fill="#7fe881" />
          <Path data-name="Path 339" d="M668.386 1802.913l-39.455 19.726-7.706-3.852v-23.348z" fill="#5bc980" />
          <Path
            data-name="Path 340"
            d="M679.02 1795.207a7.729 7.729 0 01-7.706 7.706H570.905a7.708 7.708 0 01.231-15.412l50.089-7.706 50.089 7.706a7.729 7.729 0 017.706 7.706z"
            fill="#895d3c"
          />
          <Path
            data-name="Path 341"
            d="M679.02 1795.207a7.729 7.729 0 01-7.706 7.706h-50.089v-23.118l50.089 7.706a7.729 7.729 0 017.706 7.706z"
            fill="#714c2f"
          />
          <Path
            data-name="Path 342"
            d="M679.02 1779.795a7.729 7.729 0 01-7.706 7.706H571.136a7.706 7.706 0 110-15.412l50.089-7.706 50.089 7.706a7.729 7.729 0 017.706 7.706z"
            fill="#ff637b"
          />
          <Path
            data-name="Path 343"
            d="M671.314 1787.501h-50.089v-23.118l50.089 7.706a7.706 7.706 0 110 15.412z"
            fill="#e63950"
          />
          <Path
            data-name="Path 344"
            d="M636.894 1722h-31.338a50.186 50.186 0 00-50.089 50.089h131.516A50.186 50.186 0 00636.894 1722z"
            fill="#fdbf00"
          />
          <Path
            data-name="Path 345"
            d="M686.983 1772.089h-65.758V1722h15.669a50.186 50.186 0 0150.089 50.089z"
            fill="#ff9100"
          />
          <Path data-name="Rectangle 1584" d="M617.616 1737.394h7.217v8.119h-7.217z" fill="#faecd8" />
          <Path data-name="Rectangle 1585" d="M621.225 1737.394h3.609v8.119h-3.609z" fill="#f4d7af" />
          <Path data-name="Rectangle 1586" d="M640.17 1737.394h8.119v8.119h-8.119z" fill="#f4d7af" />
          <Path data-name="Rectangle 1587" d="M594.16 1737.394h8.119v8.119h-8.119z" fill="#faecd8" />
          <Path data-name="Rectangle 1588" d="M606.79 1752.731h7.217v8.119h-7.217z" fill="#faecd8" />
          <Path data-name="Rectangle 1589" d="M582.433 1752.731h8.119v8.119h-8.119z" fill="#faecd8" />
          <Path data-name="Rectangle 1590" d="M629.344 1752.731h8.119v8.119h-8.119z" fill="#f4d7af" />
          <Path data-name="Rectangle 1591" d="M652.8 1752.731h8.119v8.119H652.8z" fill="#f4d7af" />
        </G>
      </G>
    </Svg>
  );
};

export default BurgerIcon;
