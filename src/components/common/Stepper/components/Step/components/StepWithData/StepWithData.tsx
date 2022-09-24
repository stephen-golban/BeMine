import React from 'react';
import { ScrollView } from 'react-native';

import { useStep } from '../../hooks';
import useStyles from './StepWithData.styles';

import Box from '@/components/common/Box';
import Text from '@/components/common/Text';

import { IStepWithDataProps } from './StepWithData.types';

const StepWithData: React.FC<IStepWithDataProps> = ({ Item, data, ...props }) => {
  const styles = useStyles({ length: data?.length });

  const { DATA, toggleSelected, selectedCount } = useStep({ ...props, data });

  return (
    <Box width="auto" alignItems="center" flexDirection="column" padding="sm">
      <Text pb="sm" variant="font14Bold">
        {selectedCount} {selectedCount === 1 ? 'option' : 'options'} selected
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        {DATA.map((item, index) => {
          return (
            <Item
              key={item.name}
              title={item.name}
              Icon={item.icon}
              width={50}
              height={50}
              focused={DATA[index].selected}
              onPress={() => toggleSelected(index)}
            />
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default StepWithData;
