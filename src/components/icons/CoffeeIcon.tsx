import * as React from 'react';
import Svg, { Defs, ClipPath, Path, G, Circle } from 'react-native-svg';

import { IconProps } from './types/Icon';

const DrivingIcon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Svg width={213.064} height={213.064} viewBox="0 0 213.064 213.064" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path data-name="Rectangle 1594" d="M0 0h98.798v141.099H0z" fill="none" />
        </ClipPath>
      </Defs>
      <G data-name="Group 2416" transform="translate(-146.416 -3386)">
        <Circle
          data-name="Ellipse 67"
          cx={106.532}
          cy={106.532}
          transform="translate(146.416 3386)"
          r={106.532}
          fill="#696969"
          opacity={0.1}
        />
        <G data-name="Group 2311">
          <G data-name="Group 2310" transform="translate(203.416 3422)" clipPath="url(#a)">
            <Path
              data-name="Path 473"
              d="M22.646 141.099c-1.8-.735-3.638-1.311-5.133-2.732a12.1 12.1 0 01-3.672-8.322c-.32-4.509-.537-9.025-.854-13.535-.224-3.184-.54-6.36-.815-9.54.717-.714 1.637-.486 2.481-.487q23.884-.022 47.767-.011h14.592a5.909 5.909 0 012.177.2c.688.406.6 1.079.547 1.712q-.706 9.313-1.36 18.63c-.11 1.549-.132 3.112-.385 4.653-.884 5.392-3.785 8.417-9.053 9.424z"
              fill="#b2a48c"
            />
            <Path
              data-name="Path 474"
              d="M68.94 141.099a15.757 15.757 0 004.848-2.4 10.191 10.191 0 003.664-6.372c.539-3.653.624-7.355.875-11.039.3-4.363.715-8.718 1.073-13.078.034-.411.008-.826.011-1.238.565-.6 1.3-.438 2-.453 1.181.01 2.362-.07 3.542-.019.579.025 1.2-.057 1.628.49-.359 4.462-.773 8.92-1.058 13.386-.175 2.738-.543 5.478-.542 8.206 0 6.233-2.625 10.48-8.6 12.519z"
              fill="#887a61"
            />
            <Path
              data-name="Path 475"
              d="M81.363 106.888l-1.952.081c-.366-.015-.732-.042-1.1-.042H13.269c-.366 0-.732.028-1.1.042-2.634-.143-3.142-.759-3.314-3.462-.393-6.174-.872-12.343-1.305-18.514-.305-4.344-.584-8.69-.89-13.034-.335-4.754-.652-9.51-1.049-14.259-.223-2.663.363-3.565 2.7-3.741a2.5 2.5 0 011.7-.4q36.335-.009 72.67 0c.138 0 .274.023.41.036a4.424 4.424 0 011.854.206 2.98 2.98 0 011.5 2.884c-.019 3.766-.481 7.5-.685 11.26-.181 3.341-.472 6.677-.7 10.017-.311 4.575-.668 9.146-.972 13.721-.21 3.157-.5 6.309-.658 9.468-.06 1.242-.211 2.468-.343 3.7a2.092 2.092 0 01-1.731 2.034"
              fill="#e1a875"
            />
            <Path
              data-name="Path 476"
              d="M95.448 35.57c-1.271.415-2.593 0-3.875.24a2.787 2.787 0 01-2.24.409 70.216 70.216 0 00-8.658-.285q-35.445-.01-70.89-.006a13.825 13.825 0 01-2.2-.066c-1.471-.444-2.994 0-4.476-.259C.932 34.977.03 33.861.016 31.667q-.031-4.75 0-9.5a3.546 3.546 0 013.529-3.922 2.842 2.842 0 002.568-2.119c1.543-4.215 3.12-8.419 4.67-12.631 1.105-3 2.159-3.668 5.374-3.457Q28.92.876 41.688 1.679q17.365 1.108 34.731 2.213c1.005.064 2.008.183 3.011.276a4.353 4.353 0 013.211 3.08c1 2.657 2.06 5.292 2.951 7.988a3.521 3.521 0 003.048 2.715c2.2.35 3.262 1.826 3.275 4.075.019 3.205-.023 6.411.017 9.616a3.838 3.838 0 01-1.737 3.56c1.379-.077 2.687-.052 3.995-.034a1.449 1.449 0 011.258.4"
              fill="#b47e5f"
            />
            <Path
              data-name="Path 477"
              d="M3.111 35.601l4.446.056c7.944.056 15.888.019 23.832.022q25.555.01 51.11.007c2.536 0 2.469-.405 2.31 2.322-.28 4.809-.6 9.615-1.047 14.412a2.223 2.223 0 01-.493 1.538c-.366.015-.732.043-1.1.043H9.411c-.366 0-.732-.028-1.1-.042-.068-3.745-.511-7.464-.766-11.2-.116-1.684-.3-3.369-.327-5.059-.029-1.888-.011-1.863-1.963-1.9-.714-.014-1.467.23-2.147-.2"
              fill="#b2a48c"
            />
            <Path
              data-name="Path 478"
              d="M81.362 106.888c1.876-1.034 1.451-2.966 1.58-4.541.489-5.966.723-11.952 1.189-17.919.313-4.009.533-8.024.844-12.031q.588-7.583 1.068-15.172a3.493 3.493 0 00-1.125-3.194 7.956 7.956 0 015.521-.092c2.218.19 2.872.834 2.727 3.029-.392 5.943-.861 11.88-1.283 17.821-.312 4.388-.6 8.778-.9 13.166-.379 5.577-.736 11.156-1.149 16.73-.121 1.642-.921 2.151-3.256 2.3l-5.216-.1"
              fill="#b47f5f"
            />
            <Path
              data-name="Path 479"
              d="M95.448 35.569h-5.774c2.3-1.477 1.864-3.763 1.864-5.911 0-2.569-.119-5.144.039-7.7a3.611 3.611 0 00-3.385-3.75 2.687 2.687 0 01-2.617-1.991c-1-2.8-2.173-5.533-3.088-8.355a6.749 6.749 0 00-3.056-3.693 54.966 54.966 0 016.582.337 3.708 3.708 0 013.4 2.764c1.033 2.927 2.169 5.818 3.226 8.737a2.9 2.9 0 002.766 2.22 3.411 3.411 0 013.346 3.511q.107 5.225-.012 10.453a3.357 3.357 0 01-3.286 3.379"
              fill="#9e6e50"
            />
            <Path
              data-name="Path 480"
              d="M90.437 53.941l-5.521.092-1.647-.077q.54-7.092 1.083-14.183a21.758 21.758 0 01.146-3.428c.116-.488-.234-.518-.569-.528-.413-.012-.826-.007-1.239-.007q-36.758 0-73.517-.008a3.027 3.027 0 01-1.617-.147c.549-.025 1.1-.072 1.646-.072q38.3 0 76.6.012c1.924 0 3.847.139 5.771.213-.171 5.372-.647 10.723-1.114 16.074-.06.681-.018 1.371-.023 2.057"
              fill="#887a61"
            />
            <Path
              data-name="Path 481"
              d="M47.161 94.244c-1.442.357-2.567-.508-3.61-1.175a10.593 10.593 0 01-5.2-9.363q-.007-3.364 0-6.728a10.625 10.625 0 018.053-10.3c.293.531-.027.976-.216 1.428-1.992 4.774-1.55 9.284 1.727 13.316 3.174 3.9 2.375 8.455.082 12.161a1.224 1.224 0 01-.837.658"
              fill="#b47f5f"
            />
            <Path
              data-name="Path 482"
              d="M51.3 66.671a1.388 1.388 0 011.165-.1A11.038 11.038 0 0160.4 76.792c.027 2.7.044 5.407-.014 8.109-.087 4.058-4.087 8.682-8.015 9.349a.959.959 0 01.02-1.035 13.817 13.817 0 00.566-10.363 2.835 2.835 0 01-.07-.4 38.355 38.355 0 01-.02-4.394 11.016 11.016 0 00-3.013-8.416 2.809 2.809 0 011.445-2.964"
              fill="#9e6e50"
            />
            <Path
              data-name="Path 483"
              d="M51.301 66.671a8.3 8.3 0 00-1.358 2.771c-.008 1.331-.524 2.581-.513 3.937a8.342 8.342 0 001.785 5.359 7.8 7.8 0 011.994 3.7 14.221 14.221 0 01-.835 11.806c-1.737.485-3.474 1.013-5.211 0 1.869-2.831 3.091-5.816 2.222-9.3a6.319 6.319 0 00-1.253-2.57c-4.078-4.852-4.551-10.087-1.726-15.692 1.631-.418 3.262-1.081 4.9-.01"
              fill="#fdefad"
            />
            <Path
              data-name="Path 484"
              d="M53.207 82.439c-.833-1.46-1.875-2.783-2.784-4.188a8.712 8.712 0 01-.481-8.809 8.988 8.988 0 013.263 6.541c.127 2.145.01 4.3 0 6.456"
              fill="#b47f5f"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default DrivingIcon;
