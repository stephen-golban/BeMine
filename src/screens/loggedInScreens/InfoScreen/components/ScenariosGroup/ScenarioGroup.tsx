import React from 'react';

import { useTheme } from '@/theme';
import useStyles from './ScenarioGroup.style';

import { Box, Scenario } from '@/components/common';
import { ArrowDownLongIcon } from '@/components/icons';

import { ScenarioGroupProps } from './ScenarioGroup.types';

const ScenarioGroup = ({ bordered, data }: ScenarioGroupProps) => {
  const styles = useStyles();
  const { colors } = useTheme();

  return (
    <Box flex={1} flexDirection="column" alignItems="center" style={bordered ? styles.subgroup : {}}>
      <ArrowDownLongIcon width={25} height={36} color={colors.black_70} />
      {data.map((item) => (
        <Scenario
          key={item.name}
          width={60}
          height={60}
          bg="light_gray"
          Icon={item.icon}
          title={item.name}
          color={colors.darkSkyBlue}
          textColor="black_70"
        />
      ))}
    </Box>
  );
};

export default ScenarioGroup;
