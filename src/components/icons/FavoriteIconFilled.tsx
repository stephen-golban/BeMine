import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const FavoriteIconFilled: React.FC<IconProps> = ({ color, ...props }) => {
  return (
    <Svg width={70} height={66.57} viewBox="0 0 70 66.57" {...props}>
      <Path
        data-name="Icon feather-star"
        d="M35 0l10.815 21.91L70 25.445 52.5 42.49l4.13 24.08L35 55.2 13.37 66.57l4.13-24.08L0 25.445l24.185-3.535z"
        fill={color}
      />
    </Svg>
  );
};

export default FavoriteIconFilled;
