import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useDateSuggestions } from '../../HomeScreen/hooks';

import { TabsParams } from '@/interfaces/loggedInStack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const useListSuggestions = () => {
  const [offset, setOffset] = React.useState(0);
  const { navigate } = useNavigation<BottomTabNavigationProp<TabsParams>>();
  const { suggestions, loading, fetchMore } = useDateSuggestions({ limit: 6, offset });

  const getOnPressItem = (id: string | undefined) => {
    return navigate('Home', {
      id,
    });
  };

  const handleEnd = () => {
    const currentLength = suggestions.length;
    fetchMore({
      variables: { offset: currentLength, limit: 6 },
    }).then((res) => {
      setOffset(currentLength + Number(res.data.getDateSuggestions?.edges?.length));
    });
  };

  return {
    loading,
    handleEnd,
    suggestions,
    getOnPressItem,
  };
};

export default useListSuggestions;
