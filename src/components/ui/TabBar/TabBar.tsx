import React from 'react';
import { SafeAreaView } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Box } from '@/components/common';
import TabButton from './components/TabButton';
import { ChatIcon, HomeIcon, SettingsIcon, UserIcon, FavouritesIcon } from '@/components/icons';
import { ITabIcons, TIcon } from './TabBar.types';
import styles from './TabBar.styles';
/**
 * Object with the tab bar button components (tab icons)
 */

const TAB_ICONS: ITabIcons = {
  Home: (props: TIcon) => <HomeIcon width={23} height={26} {...props} />,
  Favourites: (props: TIcon) => <FavouritesIcon width={35} height={37} {...props} />,
  Chat: (props: TIcon) => <ChatIcon width={23} height={23} {...props} />,
  Profile: (props: TIcon) => <UserIcon width={20} height={23} {...props} />,
  Settings: (props: TIcon) => <SettingsIcon width={39} height={39} {...props} />,
};

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <SafeAreaView style={styles.safeAreaControl}>
      <Box alignItems="center" justifyContent="space-around" paddingVertical="md" height={70} backgroundColor="black">
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const { key, name } = route;
          /* Using a map to get the icon component for the tab. */
          const Icon = TAB_ICONS[name] ?? TAB_ICONS.Home;

          return <TabButton key={key} name={name} navigation={navigation} focused={focused} Icon={Icon} />;
        })}
      </Box>
    </SafeAreaView>
  );
};

export default TabBar;
