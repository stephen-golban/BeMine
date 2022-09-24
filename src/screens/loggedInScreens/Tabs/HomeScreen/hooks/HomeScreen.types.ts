import { ApolloError } from 'apollo-boost';
import { MutableRefObject } from 'react';
import Swiper from 'react-native-deck-swiper';

type SwiperItem = {
  images: string[];
  __typename?: 'User' | undefined;
  id?: string;
  name?: string;
};

export type SwiperRefType = MutableRefObject<Swiper<SwiperItem>> | null;

export interface HomeScreenProps {
  swiperRef: SwiperRefType;
  cardsEnded: boolean;
  loading: boolean;
  error: ApolloError | undefined;
  dislikeLogic: (cardIndex: number) => void;
  likeLogic: (cardIndex: number) => void;
  setCardsEnded: React.Dispatch<React.SetStateAction<boolean>>;
  setSwiperRef: React.Dispatch<React.SetStateAction<SwiperRefType>>;
  mappedItems: SwiperItem[];
  onClickInfo: () => void;
}
