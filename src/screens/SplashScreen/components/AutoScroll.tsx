import React, { createRef } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useMount } from 'react-use';

import { Scenario } from '@/components/common';
import useGetScenarios from './hooks/useGetScenarios';
import { IScenario } from '../SplashScreen.types';

const AutoScroll = ({ scenarios, itemWidth }: { scenarios: IScenario[]; itemWidth: number }) => {
  const { data, addNextElements } = useGetScenarios(scenarios);

  const imageRef = createRef<FlatList>();
  useMount(() => {
    scrollToEnd();
  });

  function scrollToEnd() {
    imageRef?.current?.scrollToEnd({ animated: true });
  }

  const _renderItem = ({ item }: { item: IScenario }) => {
    return <Scenario key={item.name} title={item.name} Icon={item.icon} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList<IScenario>
        scrollEventThrottle={1}
        ref={imageRef}
        initialNumToRender={scenarios.length}
        data={data}
        getItemLayout={(data, index) => ({
          length: data?.length || 0,
          offset: itemWidth * index,
          index,
        })}
        onContentSizeChange={scrollToEnd}
        scrollEnabled={false}
        onEndReachedThreshold={0.5}
        onEndReached={addNextElements}
        showsHorizontalScrollIndicator={false}
        renderItem={_renderItem}
        horizontal
        style={{ width: '100%' }}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
export default AutoScroll;
