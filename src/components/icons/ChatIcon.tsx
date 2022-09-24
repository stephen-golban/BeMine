import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const ChatIcon: React.FC<IconProps> = ({ color = '#fff', ...props }) => {
  return (
    <Svg width={81.668} height={81.668} viewBox="0 0 81.668 81.668" {...props}>
      <Path
        d="M78.168 38.76a34.763 34.763 0 01-3.733 15.763 35.26 35.26 0 01-31.526 19.5 34.762 34.762 0 01-15.763-3.733L3.5 78.168l7.882-23.645A34.762 34.762 0 017.648 38.76a35.26 35.26 0 0119.5-31.527A34.762 34.762 0 0142.908 3.5h2.074a35.177 35.177 0 0133.186 33.186z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7px"
      />
    </Svg>
  );
};

export default ChatIcon;
