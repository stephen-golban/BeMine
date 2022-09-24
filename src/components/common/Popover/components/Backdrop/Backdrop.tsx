import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import useUnmount from 'react-use/lib/useUnmount';
import useDebounce from 'react-use/lib/useDebounce';
import useCloseBackdrop from './hooks/useCloseBackdrop';

import { IPopoverBackdropProps } from './Backdrop.types';

const Backdrop: React.FC<IPopoverBackdropProps> = ({ onTouchBackdrop, isBackdropOpen }) => {
  const closeBackdrop = useCloseBackdrop(onTouchBackdrop);

  const [ready, setReady] = React.useState(isBackdropOpen);
  const [, cancel] = useDebounce(() => setReady(isBackdropOpen), 100, [isBackdropOpen]);

  useUnmount(() => cancel());

  if (!ready) {
    return null;
  }

  return <Pressable onPress={() => closeBackdrop()} style={StyleSheet.absoluteFill} />;
};

export default Backdrop;
