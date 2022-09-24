import React from 'react';

import { useTheme } from '@/theme';

import ListRow from './components/List.Row';
import { SafeAreaView, ScrollView } from 'react-native';

const List: React.FC = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.black }}>
      <ScrollView>
        <ListRow heading={['Ready to be invited by you', 20, 'darkSkyBlue']} />
        <ListRow heading={['Proposed a date', 20, 'carnationPink']} />
        <ListRow heading={['Daily', 40, 'white']} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;
