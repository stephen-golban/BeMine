import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import styles from './Splash.Screen.styles';
import { Logo } from '@/components/icons';
import { Box, Text } from '@/components/common';
import { allScenarios } from '../loggedInScreens/InfoScreen/data';
import AutoScroll from './components/AutoScroll';

import Progress from './components/Progress';
import { IScenario } from './SplashScreen.types';

const Splash = () => {
  const [scenarios] = useState<IScenario[]>(allScenarios());

  return (
    <SafeAreaView style={styles.container}>
      <Box flexDirection="column">
        <Box height={200} justifyContent="center" flex={1} style={{ marginTop: '40%' }}>
          <Logo width={150} height={170} />
        </Box>
        <Progress steps={10} height={8} />
        <Box height="auto" marginTop="xl">
          <AutoScroll scenarios={scenarios} itemWidth={90} />
        </Box>
        <Box height="auto" justifyContent="center" marginVertical="lg" alignItems="flex-end">
          <Text variant="font16Bold" color="white" opacity={0.5}>
            Powered by BeMine Inc.
          </Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Splash;
