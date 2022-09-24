import * as React from 'react';
import Svg, { G, Path, Circle, Text, TSpan } from 'react-native-svg';

import { IconProps } from './types/Icon';

const FavouritesIcon: React.FC<IconProps<{ smallCircleBg?: string; count?: number }>> = ({
  count = 30,
  color = '#fff',
  smallCircleBg = '#095370',
  ...props
}) => {
  return (
    <Svg width={110.059} height={116.646} viewBox="0 0 110.059 116.646" {...props}>
      <G data-name="Group 2455" transform="translate(-338.941 -102.354)">
        <Path
          data-name="Icon feather-star"
          d="M389.498 105.854l14.543 29.457 32.513 4.753-23.528 22.917 5.553 32.373-29.081-15.292-29.081 15.292 5.553-32.375-23.529-22.915 32.516-4.753z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7px"
        />
        <Circle data-name="Ellipse 95" cx={31} cy={31} r={31} transform="translate(387 157)" fill={smallCircleBg} />
        <Text
          data-name={30}
          transform="translate(419 201)"
          fill={color}
          fontSize="41px"
          fontFamily="OpenSans-Bold,Open Sans"
          fontWeight={700}
        >
          <TSpan x={-23.403} y={0}>
            {count}
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
};

export default FavouritesIcon;
