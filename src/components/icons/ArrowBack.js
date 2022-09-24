import React from 'react';

import Svg, { Path } from 'react-native-svg';

const ArrowBack = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      {...props}
    >
      <Path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </Svg>
  );
};

export default ArrowBack;
