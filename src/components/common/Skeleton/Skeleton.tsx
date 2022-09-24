import React from 'react';
import { Animated } from 'react-native';

import useStyles from './Skeleton.styles';

const Skeleton: React.FC<{ backgroundColor?: string }> = ({ backgroundColor }) => {
  const opacity = React.useRef(new Animated.Value(0.5));
  const styles = useStyles({ backgroundColor });

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, { toValue: 1, useNativeDriver: true, duration: 500 }),
        Animated.timing(opacity.current, { toValue: 0.5, useNativeDriver: true, duration: 800 }),
      ]),
    ).start();
  }, [opacity]);

  return <Animated.View style={[styles.container, { opacity: opacity.current }]} />;
};

export default Skeleton;
