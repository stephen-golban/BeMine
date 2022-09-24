import React from 'react';
import { SafeAreaView, View } from 'react-native';

import useStyles from './WelcomeScreen.styles';

import { Logo } from '@/components/icons';
import { Box, Text } from '@/components/common';
import { WelcomeButton, WelcomeInformativeText } from './parts';

import { WelcomeScreenProps } from './WelcomeScreen.types';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View />
      <View />
      <Box width="auto" height="auto">
        <Logo width={150} height={170} />
      </Box>

      <Box height="auto" alignItems="center" flexDirection="column">
        <WelcomeInformativeText />
        <Box flexDirection="column" height="auto" marginVertical="lg" width="50%">
          <WelcomeButton title="create account" onPress={() => navigation.navigate('SignUpScreen')} />
          <WelcomeButton title="sign in" onPress={() => navigation.navigate('SignInScreen')} bg="white_20" />
        </Box>
        <Text color="white_50" variant="font14Regular" onPress={() => null}>
          Having Trouble singing in?
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
