import React from 'react';

// import { useListSuggestions } from '../hooks';
import { COLORS } from '@/theme/utilities/constants';

import ListCarousel from './List.Carousel';
import { Box, Text } from '@/components/common';
import ListCarouselItem from './List.CarouselItem';
import useFakeListSuggestions from '../hooks/useFakeListSuggestions';

interface IListRowProps {
  heading: [string, number, keyof typeof COLORS];
}

const ListRow: React.FC<IListRowProps> = ({ heading }) => {
  const { handleEnd, loading, suggestions, getOnPressItem } = useFakeListSuggestions();

  return (
    <Box flexDirection="column" height="auto">
      <Text variant="font16Regular" color={heading[2]} marginBottom="sm" marginLeft="md" marginTop="md">
        {heading[0]}{' '}
        <Text fontWeight="bold" color={heading[2]} variant="font16Bold">
          ({heading[1]})
        </Text>
      </Text>

      <ListCarousel data={suggestions} onReachEnd={handleEnd} loading={loading}>
        {(item) => (
          <ListCarouselItem title={item.name} imageSrc={item.images[0]} onPressItem={() => getOnPressItem(item.id)} />
        )}
      </ListCarousel>
    </Box>
  );
};

export default ListRow;
