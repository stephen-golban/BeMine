import React from 'react';
import { Animated, BackHandler, StatusBar, StyleSheet } from 'react-native';

import useAnimatedStyles from './hooks/useAnimatedStyles';
import { OverlayContainer } from '@react-native-aria/overlays';

import { IOverlayProps } from './Overlay.types';

const Overlay: React.FC<IOverlayProps> = ({ children, isOverlayOpen, onRequestClose }) => {
  const { styles, isExited } = useAnimatedStyles(isOverlayOpen);

  const backAction = React.useCallback(() => {
    if (typeof onRequestClose === 'function' && isOverlayOpen) {
      onRequestClose();
      return true;
    }
    return false;
  }, [isOverlayOpen, onRequestClose]);

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [backAction]);

  if (!isOverlayOpen && isExited) {
    return null;
  }

  return (
    <OverlayContainer>
      <Animated.View
        style={[StyleSheet.absoluteFill, styles, { marginTop: StatusBar.currentHeight }]}
        pointerEvents="box-none"
      >
        {children}
      </Animated.View>
    </OverlayContainer>
  );
};

export default Overlay;
