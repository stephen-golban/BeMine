import * as React from 'react';
import { ScrollView } from 'react-native';

import { useTheme } from '@/theme';
import useStyles from './Info.style';
import { useNavigation } from '@react-navigation/native';

import { Header } from './components';
import { Box, Scenario } from '@/components/common';
import ScenarioGroup from './components/ScenariosGroup/ScenarioGroup';

import { TabsProps } from '@/interfaces/loggedInStack';
import { MAIN_SCENARIOS, selectScenario } from './data';

const InfoScreen = () => {
  const styles = useStyles();
  const { colors } = useTheme();
  const { navigate } = useNavigation<TabsProps>();

  const handleGoBack = () => navigate('Home', {});

  return (
    <ScrollView style={styles.scrollview}>
      <Header handleGoBack={handleGoBack} />
      <Box marginVertical="lg" flex={1} paddingHorizontal="lg" justifyContent="space-between">
        {MAIN_SCENARIOS.map((scenario, scenarioIndex) => (
          <Box key={scenario.name} flex={1} flexDirection="column" alignItems="center">
            <Scenario
              key={scenario.name}
              width={60}
              height={60}
              bg="light_gray"
              textColor="black_70"
              Icon={scenario.icon}
              title={scenario.name}
              color={colors.darkSkyBlue}
            />
            <ScenarioGroup bordered={scenarioIndex === 1} data={selectScenario(scenario.name)?.further} />
            <ScenarioGroup bordered={scenarioIndex === 1} data={selectScenario(scenario.name)?.last} />
          </Box>
        ))}
      </Box>
    </ScrollView>
  );
};

export default InfoScreen;
