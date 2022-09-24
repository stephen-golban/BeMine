import React from 'react';
import { Animated } from 'react-native';

import { useTheme } from '@/theme';
import useReactiveForAnimationProgress from './hooks/useProgressAnimation';

import { Box } from '@/components/common';

const Progress = ({ steps, height }: { steps: number; height: number }) => {
  const { colors } = useTheme();
  const [lineLoaderWidth, setLineLoaderWidth] = React.useState(0);
  const { animatedValue } = useReactiveForAnimationProgress(steps, lineLoaderWidth);

  return (
    <Box
      width="70%"
      height={height}
      overflow="hidden"
      alignSelf="center"
      borderRadius={height / 2}
      backgroundColor="white_30"
    >
      <Animated.View
        onLayout={(e) => setLineLoaderWidth(e.nativeEvent.layout.width)}
        style={{
          height,
          top: 0,
          left: 0,
          width: '100%',
          position: 'absolute',
          borderRadius: height / 2,
          backgroundColor: colors.white,
          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}
      />
    </Box>
  );
};

export default React.memo(Progress);
