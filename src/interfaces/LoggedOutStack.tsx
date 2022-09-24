import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type LoggedOutStackParams = {
  WelcomeScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
};
export type LoggedOutStackProps = NativeStackNavigationProp<LoggedOutStackParams>;

export type WelcomeScreenRouteProps = RouteProp<LoggedOutStackParams, 'WelcomeScreen'>;
export type SignInScreenRouteProps = RouteProp<LoggedOutStackParams, 'SignInScreen'>;
export type SignUpScreenRouteProps = RouteProp<LoggedOutStackParams, 'SignUpScreen'>;
