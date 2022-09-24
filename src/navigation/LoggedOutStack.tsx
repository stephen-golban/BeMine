import * as React from 'react';

import { SignInScreen, SignUpScreen, WelcomeScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoggedOutStackParams } from '@/interfaces/LoggedOutStack';

/* Creating a Stack Navigator. */
const Stack = createNativeStackNavigator<LoggedOutStackParams>();

/**
 * It returns a Stack Navigator with two screen components: SignInScreen, SignUpScreen
 * @returns A Navigator component.
 */
const LoggedOutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default LoggedOutStack;
