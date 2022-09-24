import { RefObject } from 'react';
import type Swiper from 'react-native-deck-swiper';

export type SwiperType<T = unknown> = Swiper<T>;
export type SwiperRefType<T = unknown> = RefObject<SwiperType<T>>;
