import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const FavouriteIcon: React.FC<IconProps<{ smallCircleBg?: string }>> = ({ smallCircleBg = '#29abe2', ...props }) => {
  return (
    <Svg width={76.2} height={72.76} viewBox="0 0 76.2 72.76" {...props}>
      <Path
        id="Icon_feather-star"
        data-name="Icon feather-star"
        d="M38.1 3l10.846 21.973L73.2 28.518 55.65 45.611l4.142 24.149L38.1 58.352 16.408 69.76l4.142-24.149L3 28.518l24.254-3.545z"
        fill="none"
        stroke={smallCircleBg}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6px"
      />
    </Svg>
  );
};

export default FavouriteIcon;
