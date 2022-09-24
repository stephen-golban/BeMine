import React from 'react';
import { Platform } from 'react-native';

import useIosPermission from './useIosPermission';
import useAndroidPermission from './useAndroidPermission';

const useLocationPermission = () => {
  const { hasPermissionIOS } = useIosPermission();
  const { hasPermissionAndroid } = useAndroidPermission();

  const hasLocationPermission = React.useCallback(async () => {
    if (Platform.OS === 'ios') {
      return await hasPermissionIOS();
    }

    if (Platform.OS === 'android') {
      return await hasPermissionAndroid();
    }
  }, [hasPermissionAndroid, hasPermissionAndroid]);

  return { hasLocationPermission };
};

export default useLocationPermission;
