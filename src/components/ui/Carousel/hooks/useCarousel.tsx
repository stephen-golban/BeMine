import React from 'react';
import { Dimensions, FlatList } from 'react-native';

const { width } = Dimensions.get('screen');

type useCarouselProps = {
  images: string[];
  scrollRef?: React.MutableRefObject<FlatList<unknown> | null>;
};

const useCarousel = ({ images, scrollRef }: useCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onChange = (direction: 'left' | 'right') => {
    let newCurrentImage = activeIndex + 1;

    if (direction === 'left') {
      newCurrentImage = activeIndex - 1;
    }

    if (newCurrentImage >= images?.length || newCurrentImage < 1) {
      newCurrentImage = 0;
    }

    scrollRef?.current?.scrollToOffset({
      offset: newCurrentImage * width,
      animated: true,
    });
    setActiveIndex(newCurrentImage);
  };
  return {
    onChange,
    activeIndex,
  };
};

export default useCarousel;
