import React from 'react';
import { Animated, Easing } from 'react-native';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

type useScenarioType = { error: { message: string; toggle: boolean } };

const useScenario = ({ error }: useScenarioType) => {
  const shakeAnimation = React.useRef(new Animated.Value(0)).current;

  const startShake = () => {
    return Animated.timing(shakeAnimation, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => setTimeout(() => shakeAnimation.setValue(0), 500));
  };

  useUpdateEffect(() => {
    if (error.message !== '') {
      startShake();
    }
  }, [error]);

  return { shakeAnimation };
};

export default useScenario;
