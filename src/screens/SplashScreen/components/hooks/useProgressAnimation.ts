import { useEffect, useRef, useState } from 'react';

import { Animated } from 'react-native';

const useReactiveForAnimationProgress = (steps: number, lineLoaderWidth: number) => {
  const [step, setstep] = useState(0);
  const reactive = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    const lineLoaderTimer = setInterval(() => {
      setstep((step) => (step + 1) % (10 + 1));
    }, 1000);

    return () => clearInterval(lineLoaderTimer);
  }, []);

  useEffect(() => {
    reactive.setValue(-lineLoaderWidth + (lineLoaderWidth * step) / steps);
  }, [step, lineLoaderWidth]);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return {
    animatedValue,
  };
};

export default useReactiveForAnimationProgress;
