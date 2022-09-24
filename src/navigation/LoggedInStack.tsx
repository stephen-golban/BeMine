import * as React from 'react';

import { useMeUser } from '@/context/hooks';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from './TabNavigator';
import { InfoScreen, SplashScreen } from '@/screens';

import { LoggedInStackParams } from '@/interfaces/loggedInStack';

const Stack = createNativeStackNavigator<LoggedInStackParams>();

const LoggedInStack = () => {
  const { loading, error } = useMeUser();

  if (loading || error) {
    error && console.log('me-user-error-LoggedInStack', error);
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{ animation: 'slide_from_right', presentation: 'modal' }}
        />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default LoggedInStack;
