import * as React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

import { IconProps } from './types/Icon';

const FrenchFoodIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <G data-name="Group 2431" transform="translate(-514.469 -1054)">
        <Circle
          data-name="Ellipse 65"
          cx={106.532}
          cy={106.532}
          transform="translate(514.469 1054)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <Path
          data-name="Path 330"
          d="M634.097 1132.195l3.754.999q.26-.982.457-1.977l25.658-5.962 3.817-.718a44.593 44.593 0 00-5.733-13.946c-5.95-9.522-14.766-15.348-25.485-16.843a8.323 8.323 0 00-7.65 3.17q-.196.243-.372.496a8.4 8.4 0 00-1.09 7.79c2.132 5.75 5.34 16.771 2.892 25.997l3.753.999z"
          fill="#ffc373"
        />
        <G data-name="Group 2283">
          <Path
            data-name="Path 331"
            d="M589.514 1214.056a44.589 44.589 0 0015.065.634l-.627-3.835-3.145-26.154q.866-.525 1.702-1.104l-2.219-3.189-2.219-3.188c-7.834 5.451-19.292 6.19-25.425 6.148a8.4 8.4 0 00-6.951 3.682q-.177.252-.34.519a8.322 8.322 0 00-.37 8.271c5.069 9.573 13.55 15.87 24.529 18.216z"
            fill="#ffb64f"
          />
          <Path
            data-name="Path 332"
            d="M627.712 1144.305l43.616 15.131 3.64 1.36a56.449 56.449 0 002.583-28.624 13.076 13.076 0 00-15.87-10.636l-36.141 8.406-1.683 13.9z"
            fill="#ffb64f"
          />
        </G>
        <Path
          data-name="Path 333"
          d="M615.088 1221.271a56.451 56.451 0 0026.028-12.189l-2.52-2.96-29.1-35.84-1.75-3.463-12.49 6.32 4.431 36.843a13.076 13.076 0 0015.41 11.291z"
          fill="#f90"
        />
        <Path
          data-name="Path 334"
          d="M639.803 1216.602l-37.366-46.029 23.133-33 56.012 19.43.36 2.304c2.159 13.82-10.967 33.405-11.528 34.233l-.071.102c-.587.81-14.52 19.83-28.25 22.513z"
          fill="#ffc373"
        />
        <Path
          data-name="Path 335"
          d="M639.808 1216.595l-37.365-46.03 11.565-16.498 56.377 39.52-.035.05c-.587.81-14.52 19.83-28.25 22.513z"
          fill="#ffb64f"
        />
      </G>
    </Svg>
  );
};

export default FrenchFoodIcon;