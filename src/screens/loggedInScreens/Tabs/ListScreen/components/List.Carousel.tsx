import React from 'react';
import { FlatList } from 'react-native';

import ListSkeleton from './List.Skeleton';

import { LIST_UTILS } from './List.Utils';
import { ListDataType } from '../List.types';

interface IListCarouselProps {
  data: any[];
  loading?: boolean;
  onReachEnd: () => void;
  children: (item: ListDataType) => JSX.Element;
}

const ListCarousel: React.FC<IListCarouselProps> = ({ children, data, onReachEnd, loading }) => {
  const getItemLayout = (index: number) => ({
    length: LIST_UTILS.ITEM_HEIGHT,
    offset: LIST_UTILS.ITEM_HEIGHT * index,
    index,
  });

  return (
    <FlatList
      data={data}
      horizontal
      maxToRenderPerBatch={3}
      onEndReached={onReachEnd}
      onEndReachedThreshold={1}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => children(item)}
      keyExtractor={(item, index) => item.id + index}
      getItemLayout={(_, index) => getItemLayout(index)}
      ListFooterComponent={() => (loading ? <ListSkeleton /> : null)}
    />
  );
};

export default ListCarousel;
