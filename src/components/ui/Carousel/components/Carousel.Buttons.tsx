import React from 'react';

import { Box, Button } from '@/components/common';

interface ICarouselButtonsProps {
  onChange: (dir: 'left' | 'right') => void;
}

const CarouselButtons: React.FC<ICarouselButtonsProps> = ({ onChange }) => {
  return (
    <Box position="absolute">
      <Button onPress={() => onChange('left')} flex={1} />
      <Button onPress={() => onChange('right')} flex={1} />
    </Box>
  );
};

export default CarouselButtons;
