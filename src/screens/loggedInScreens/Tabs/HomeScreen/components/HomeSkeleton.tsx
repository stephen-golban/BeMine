import React from 'react';
import { Animated } from 'react-native';

import { useTheme } from '@/theme';

import { Box } from '@/components/common';
import { Logo } from '@/components/icons';

const HomeSkeleton = () => {
  const { colors } = useTheme();
  const startValue = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(startValue, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(startValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [startValue]);

  return (
    <Box backgroundColor="greyishBrown" alignItems="center" justifyContent="center">
      <Animated.View style={{ transform: [{ scale: startValue }] }}>
        <Logo color={colors.black_two} width={200} height={200} withoutText />
      </Animated.View>
    </Box>
  );
};

export default HomeSkeleton;
