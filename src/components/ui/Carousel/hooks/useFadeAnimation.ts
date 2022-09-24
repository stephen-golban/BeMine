import React from 'react';
import { Animated } from 'react-native';

const useFadeAnimation = (visible?: boolean) => {
  const opacityRef = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(opacityRef, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacityRef, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return opacityRef;
};

export default useFadeAnimation;
