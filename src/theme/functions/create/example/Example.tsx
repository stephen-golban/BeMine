import React from 'react';
import { View, Text } from 'react-native';

import useAdvancedStyles from './styles.advanced';

import simpleStyles from './styles.simple';
import mediumStyles from './styles.medium';

const Example: React.FC<{ width: string | number }> = ({ width = 10 }) => {
  const advancedStyles = useAdvancedStyles({ width });
  return (
    <View>
      <View style={advancedStyles.container}>
        <Text>Advanced</Text>
      </View>
      <View style={mediumStyles.container}>
        <Text>Medium</Text>
      </View>
      <View style={simpleStyles.container}>
        <Text>Simple</Text>
      </View>
    </View>
  );
};

export default Example;
