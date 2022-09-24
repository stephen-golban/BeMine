import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types/Icon';

const HeartSimpleIcon: React.FC<IconProps> = ({ color = '#29abe2', ...props }) => {
  return (
    <Svg width={71.797} height={69.035} viewBox="0 0 71.797 69.035" {...props}>
      <Path
        data-name="Icon ionic-ios-heart"
        d="M52.467 0h-.173a19.638 19.638 0 00-16.4 8.975A19.638 19.638 0 0019.494 0h-.169A19.513 19.513 0 00-.005 19.5c0 6.386 2.8 15.447 8.25 22.9 10.39 14.2 27.649 26.63 27.649 26.63S53.153 56.604 63.543 42.4c5.454-7.456 8.25-16.517 8.25-22.9A19.513 19.513 0 0052.467 0z"
        fill={color}
      />
    </Svg>
  );
};

export default HeartSimpleIcon;
