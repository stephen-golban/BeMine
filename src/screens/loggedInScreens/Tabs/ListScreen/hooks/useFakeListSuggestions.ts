import React from 'react';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import { TabsParams } from '@/interfaces/loggedInStack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Suggestion } from './../../HomeScreen/hooks/useDateSuggestions';

const useFakeListSuggestions = () => {
  const { navigate } = useNavigation<BottomTabNavigationProp<TabsParams>>();

  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);

  const getData = async (off?: number) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://randomuser.me/api/?page=${off ?? offset}&results=4&inc=name,id,picture`);
      if (res) {
        const edges = res.data.results.map((item: any) => {
          return { id: item.id.value, name: `${item.name.first} ${item.name.last}`, images: [item.picture.large] };
        });

        setSuggestions((prev) => [...new Set([...prev, ...edges])]);
      }

      return res;
    } catch (error) {
      console.log('eerrrr', error);
    } finally {
      setLoading(false);
    }
  };

  const getOnPressItem = (id: string | undefined) => {
    return navigate('Home', {
      id,
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const handleEnd = () => {
    const currentLength = suggestions.length;
    getData(currentLength).then((res) => {
      setOffset(currentLength + Number(res?.data.length));
    });
  };

  return {
    loading,
    handleEnd,
    suggestions,
    getOnPressItem,
  };
};

export default useFakeListSuggestions;
