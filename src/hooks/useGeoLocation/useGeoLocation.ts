import React from 'react';
import { Alert } from 'react-native';

import useMount from 'react-use/lib/useMount';
import useLocationPermission from './permissions/useLocationPermission';

import Geolocation from 'react-native-geolocation-service';

const useGeoLocation = (retrieveOnMount?: boolean) => {
  const { hasLocationPermission } = useLocationPermission();

  const [location, setLocation] = React.useState<Geolocation.GeoPosition | null>(null);

  const getLocation = async () => {
    const hasPermission = hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    return Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  };

  useMount(() => {
    if (retrieveOnMount) {
      return (async () => await getLocation())();
    }
  });

  return { location, getLocation };
};

export default useGeoLocation;
