import React from 'react';
import { Dimensions, StyleSheet, View, Platform } from 'react-native';

import { useOverlayPosition } from '@react-native-aria/overlays';

import { IPopoverContentProps } from './Content.types';

const { width } = Dimensions.get('screen');

const Content: React.FC<IPopoverContentProps> = ({ children, marginHorizontal = 20, ...props }) => {
  const { injectedProps } = props; // this comes injected from the Popover

  const overlayRef = React.useRef(null);

  /* Calculating the distancing amount from both sides of the screen and substracting it from the screen width to obtain the Popover width */
  const POPOVER_WIDTH = width - marginHorizontal * 2;

  const { overlayProps, rendered } = useOverlayPosition({
    overlayRef,
    placement: 'top',
    offset: Platform.OS === 'ios' ? 20 : 0,
    targetRef: injectedProps?.targetRef as React.RefObject<unknown>,
  });

  const overlayStyle = React.useMemo(() => {
    const { bottom } = overlayProps.style;

    return StyleSheet.create({
      overlay: {
        bottom,
        zIndex: 999,
        alignSelf: 'center',
        position: 'absolute',
        width: 'auto',
        maxWidth: POPOVER_WIDTH,
        opacity: rendered ? 1 : 0,
      },
    });
  }, [POPOVER_WIDTH, overlayProps.style, rendered]);

  return (
    <View ref={overlayRef} style={overlayStyle.overlay}>
      {children}
    </View>
  );
};

export default Content;
