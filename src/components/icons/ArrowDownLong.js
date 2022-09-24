import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownLong = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <Path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
    </Svg>
  );
};

export default ArrowDownLong;
