import * as React from 'react';

import { TabBar } from '@/components/ui';
import { TabsParams } from '@/interfaces/loggedInStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ListScreen, ProfileScreen, SettingsScreen, ChatScreen } from '@/screens';

/* This is creating a new instance of the `BottomTabNavigator` component. */
const Tab = createBottomTabNavigator<TabsParams>();

/**
 * It returns a `Tab.Navigator` instance, that accepts a custom TabBar component
 * @returns A tab navigator.
 */
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" initialParams={{ id: '' }} component={HomeScreen} />
      <Tab.Screen name="Favourites" component={ListScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
