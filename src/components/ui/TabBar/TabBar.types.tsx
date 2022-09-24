import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';

export interface ITabButton {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  name: string;
  focused: boolean;
  Icon: (props: TIcon) => JSX.Element;
}

export type TIcon = { smallCircleBg: string; color: string };

export interface ITabIcons {
  [k: string]: (props: TIcon) => JSX.Element;
}
