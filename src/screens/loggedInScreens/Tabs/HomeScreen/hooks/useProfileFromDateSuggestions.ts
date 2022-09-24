import React from 'react';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { SwiperType } from '@/interfaces/swiper';
import { Suggestion } from './useDateSuggestions';
import { useGetSelectProfileProps } from './types';

const useProfileFromDateSuggestions = ({ routeId, suggestions }: useGetSelectProfileProps) => {
  const swiperRef = React.useRef<SwiperType<Suggestion>>(null);

  const getProfileIndex = (id: string) => {
    const index = suggestions.findIndex((item) => item.id === id);
    const nextIndex = index >= 0 ? index : -1;
    const indexBoundary = nextIndex >= suggestions.length ? 0 : nextIndex;
    return indexBoundary;
  };

  useUpdateEffect(() => {
    if (swiperRef.current) {
      if (routeId) {
        swiperRef.current.jumpToCardIndex(getProfileIndex(routeId));
      }
    }
  }, [routeId]);

  return {
    swiperRef,
  };
};

export default useProfileFromDateSuggestions;
