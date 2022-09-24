import React from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@/theme';
import { LIST_UTILS } from './List.Utils';

import FastImage from 'react-native-fast-image';
import { Box, Button, Text } from '@/components/common';
import LinearGradient from 'react-native-linear-gradient';

interface IListCarouselItemProps {
  title: string;
  imageSrc: string;
  onPressItem: () => void;
}
const ListCarouselItem: React.FC<IListCarouselItemProps> = ({ title, imageSrc, onPressItem }) => {
  const { spacing, colors } = useTheme();
  return (
    <Button
      margin="xs"
      position="relative"
      alignItems="center"
      justifyContent="center"
      width={LIST_UTILS.ITEM_WIDTH}
      height={LIST_UTILS.ITEM_HEIGHT}
      onPress={onPressItem}
    >
      <FastImage
        source={{
          uri: imageSrc,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={{ width: LIST_UTILS.ITEM_WIDTH, height: LIST_UTILS.ITEM_HEIGHT }}
      />
      <Box height="auto" position="absolute" justifyContent="center" bottom={spacing.md}>
        <Text variant="font20Bold" color="white" textAlign="center">
          {title.split(' ')[0]}
        </Text>
      </Box>
      <LinearGradient colors={['transparent', colors.black_70]} style={{ ...StyleSheet.absoluteFillObject }} />
    </Button>
  );
};
export default ListCarouselItem;
