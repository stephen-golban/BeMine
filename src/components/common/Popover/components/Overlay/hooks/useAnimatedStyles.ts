import React from 'react';
import { Animated } from 'react-native';

const DURATION = 200;

const useAnimatedStyles = (isOpen: boolean) => {
  // do not animate if opened by default
  const opacity = React.useRef(new Animated.Value(isOpen ? 1 : 0));

  const [isExited, setIsExited] = React.useState(isOpen ? false : true);
  const prevIsOpen = React.useRef(isOpen);

  React.useEffect(() => {
    // Opened
    if (!prevIsOpen.current && isOpen) {
      Animated.timing(opacity.current, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: true,
      }).start(() => setIsExited(false));
    }
    // Closed
    else if (prevIsOpen.current && !isOpen) {
      Animated.timing(opacity.current, {
        toValue: 0,
        duration: DURATION,
        useNativeDriver: true,
      }).start(() => setIsExited(true));
    }

    prevIsOpen.current = isOpen;
  }, [isOpen]);

  return {
    styles: {
      opacity: opacity.current,
    },
    isExited,
  };
};

export default useAnimatedStyles;
