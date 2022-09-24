import React from 'react';
import { Button } from '@/components/common';
import { ITabButton } from '../../TabBar.types';
import { useTheme } from '@/theme';

const TabButton = ({ name, focused, Icon, navigation }: ITabButton) => {
  const { colors } = useTheme();

  /**
   * When the user presses the button, the tab is focused and the button is pressed
   */
  const onPress = () => {
    if (!focused) {
      navigation.navigate(name);
    }
  };

  return (
    <Button
      width={56}
      height={56}
      borderRadius={28}
      onPress={onPress}
      disabled={focused}
      alignItems="center"
      justifyContent="center"
      backgroundColor={focused ? 'darkSkyBlue_12' : 'transparent'}
    >
      <Icon
        smallCircleBg={focused ? colors.black_300 : colors.black}
        color={focused ? colors.darkSkyBlue : colors.white_30}
      />
    </Button>
  );
};

export default React.memo(TabButton);
