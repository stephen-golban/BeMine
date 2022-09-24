import { Alert, Linking } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const openAppSetting = async () => {
  // Open the custom settings if the app has one
  try {
    return await Linking.openURL('app-settings://notification/BeMine');
  } catch {
    Alert.alert('Unable to open settings');
  }
};

const useIosPermission = () => {
  const hasPermissionIOS = async () => {
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(`Turn on Location Services to allow BeMine to determine your location.`, '', [
        { text: 'Go to Settings', onPress: openAppSetting },
        { text: "Don't Use Location", onPress: () => null },
      ]);
    }

    return false;
  };

  return { hasPermissionIOS };
};

export default useIosPermission;
