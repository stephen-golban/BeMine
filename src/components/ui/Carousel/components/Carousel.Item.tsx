import React from 'react';
import { Dimensions, Platform } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import FastImage from 'react-native-fast-image';

const { width, height } = Dimensions.get('screen');

const IP = '172.18.0.1';

interface ICarouselItemProps {
  source: string;
}

const CarouselItem: React.FC<ICarouselItemProps> = ({ source }) => {
  const imagePath = source.replace('localhost', IP);

  const { bottom, top } = useSafeAreaInsets();
  const TABBAR_HEIGHT = useBottomTabBarHeight();

  const RN_NAVIGATION_APPLIED_BOTTOM_PADDING = 45;

  const heightIos = height - 70 - top - bottom;
  const heightAndroid = height - RN_NAVIGATION_APPLIED_BOTTOM_PADDING - TABBAR_HEIGHT;

  const imageHeight = Platform.OS === 'android' ? heightAndroid : heightIos;

  return (
    <FastImage
      source={{
        uri: 'https://i.pinimg.com/736x/ac/c6/b1/acc6b17eef41a3de2077a7f82d191fbe.jpg',
        priority: FastImage.priority.high,
      }}
      style={{ width, height: imageHeight }}
    />
  );
};

export default CarouselItem;
