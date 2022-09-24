import React from 'react';

import { useTheme } from '@/theme';

import { Button, Text } from '@/components/common';
import constants from '@/theme/utilities/constants';

interface IWelcomeButtonProps {
  onPress?: () => void;
  title: string;
  bg?: keyof typeof constants.COLORS;
}

const WelcomeButton: React.FC<IWelcomeButtonProps> = ({ onPress = () => null, title, bg = 'darkSkyBlue' }) => {
  const { spacing } = useTheme();
  return (
    <Button
      width="100%"
      marginVertical="xs"
      onPress={onPress}
      borderRadius={25}
      alignItems="center"
      height={spacing.xl}
      justifyContent="center"
      backgroundColor={bg}
    >
      <Text color="white" textTransform="uppercase" variant="font16Bold">
        {title}
      </Text>
    </Button>
  );
};

export default WelcomeButton;
