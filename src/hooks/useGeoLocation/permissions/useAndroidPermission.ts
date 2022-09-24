import { Platform, PermissionsAndroid, ToastAndroid } from 'react-native';

const useAndroidPermission = () => {
  const hasPermissionAndroid = async () => {
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    if (await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)) {
      return true;
    }

    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  };

  return { hasPermissionAndroid };
};

export default useAndroidPermission;
