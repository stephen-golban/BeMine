import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type LoggedInStackParams = {
  Info: undefined;
  Tabs: NavigatorScreenParams<TabsParams>;
};
export type LoggedOInStackProps = NativeStackNavigationProp<LoggedInStackParams>;

export type InfoScreenRouteProps = RouteProp<LoggedInStackParams, 'Info'>;

export type TabsParams = {
  Home: { id?: string };
  Favourites: undefined | object;
  Chat: undefined | object;
  Profile: undefined | object;
  Settings: undefined | object;
};

export type RoutePropType = RouteProp<{ params: { id?: string } }, 'params'>;

export type TabsProps = BottomTabNavigationProp<TabsParams>;

export type HomeScreenRouteProps = RouteProp<TabsParams, 'Home'>;
export type FavouritesScreenRouteProps = RouteProp<TabsParams, 'Favourites'>;
export type ChatScreenRouteProps = RouteProp<TabsParams, 'Chat'>;
export type ProfileScreenRouteProps = RouteProp<TabsParams, 'Profile'>;
export type SettingsScreenRouteProps = RouteProp<TabsParams, 'Settings'>;
