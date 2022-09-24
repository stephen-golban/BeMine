import React from 'react';

import { Box } from '@/components/common';

interface ICarouselDotsProps {
  length: number;
  activeIndex: number;
}

const CarouselDots: React.FC<ICarouselDotsProps> = ({ activeIndex, length }) => {
  const DOTS = Array.from({ length });

  return (
    <Box width="auto" height="auto" marginTop="sm">
      {DOTS.map((_, index) => (
        <Box
          key={`carousel-dot-${index}`}
          width={12}
          height={12}
          borderRadius={7}
          borderWidth={2}
          marginBottom="sm"
          borderColor="white"
          marginHorizontal="xs"
          backgroundColor={index === activeIndex ? 'white' : 'transparent'}
        />
      ))}
    </Box>
  );
};

export default CarouselDots;
