import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function HomeIcon({ color = '#fff', ...props }: SvgProps) {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      width={76.359}
      height={84.177}
      viewBox="0 0 76.359 84.177"
      {...props}
    >
      <Path
        data-name="Path 189"
        d="M3 30.362L38.18 3l35.18 27.362v43a7.818 7.818 0 01-7.818 7.818H10.818A7.818 7.818 0 013 73.36z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6px"
      />
      <Path
        data-name="Path 190"
        d="M26.453 81.177V42.088h23.453v39.089"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6px"
      />
    </Svg>
  );
}

export default HomeIcon;
