import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { useCarousel } from './hooks';

import { Box, Text } from '@/components/common';
import LinearGradient from 'react-native-linear-gradient';
import { CarouselButtons, CarouselDots, CarouselItem, CarouselInteraction } from './components';

import { Suggestion } from '@/types/suggestions';

interface ICarouselProps {
  card: Suggestion;
  isDateProposalOpened?: boolean;
}

const Carousel: React.FC<ICarouselProps> = ({ isDateProposalOpened, card }) => {
  const scrollRef = React.useRef(null);

  console.log('isDateProposalO', isDateProposalOpened);

  const { onChange, activeIndex } = useCarousel({ images: card.images, scrollRef });

  return (
    <View>
      <FlatList
        horizontal
        data={card.images}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        removeClippedSubviews
        pagingEnabled
        ref={scrollRef}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <CarouselItem source={item} />}
      />
      <LinearGradient
        colors={['transparent', '#000000']}
        style={{ ...StyleSheet.absoluteFillObject, opacity: 0.6, top: undefined, width: '100%', height: 200 }}
      />

      <Box position="absolute" height="auto" bottom={30}>
        <Box justifyContent="flex-end" position="relative" flexDirection="column" alignItems="center">
          <CarouselInteraction visible={!isDateProposalOpened} interactionType={card.interactionType} />
          <Text variant="font24Bold">{card.name.split(' ')[0]}</Text>
          <CarouselDots activeIndex={activeIndex} length={card.images.length} />
        </Box>
      </Box>
      <CarouselButtons onChange={onChange} />
    </View>
  );
};
export default Carousel;
