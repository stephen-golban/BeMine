import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoggedOutStack from './LoggedOutStack';
import LoggedInStack from './LoggedInStack';
import { useAuthContext } from '@/context/Auth.Context';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  const { state } = useAuthContext();
  const isAuthenticated = state.isAuthenticated;

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <AppStack.Screen name="LoggedInStack" component={LoggedInStack} />
        ) : (
          <AppStack.Screen name="LoggedOutStack" component={LoggedOutStack} />
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
