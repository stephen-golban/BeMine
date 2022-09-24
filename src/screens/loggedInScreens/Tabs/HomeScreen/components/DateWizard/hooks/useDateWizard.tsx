import React from 'react';

import { useAuthContext } from '@/context/Auth.Context';

import { Popover } from '@/components/common';

import { Gender } from '@/graphql/generated';
import { Suggestion } from '@/types/suggestions';
import { SwiperRefType } from '@/interfaces/swiper';

const { usePopover } = Popover.hooks;

type StepUtilitiesRef = { resetStepperState: () => void; goToNextStepperScreen: (arg: boolean) => void };

const useDateWizard = (swipeCard: SwiperRefType<Suggestion>) => {
  const { state } = useAuthContext();
  const isFemale = state.currentUser?.gender === Gender.Female;

  const [activeLikeBtn, setActiveLikeBtn] = React.useState(true);
  const [isPopoverOpen, { showPopover, hidePopover, popoverTriggerRef }] = usePopover();

  const stepUtilitiesRef = React.useRef<StepUtilitiesRef>({
    resetStepperState: () => null,
    goToNextStepperScreen: (val = false) => val,
  });

  const closePopover = (cb?: () => void) => {
    cb && cb();
    hidePopover();
    setActiveLikeBtn(true);
    setTimeout(() => stepUtilitiesRef.current?.resetStepperState(), 500);
  };

  const onPressDislike = () => {
    if (isPopoverOpen) {
      return closePopover();
    }
    return swipeCard.current?.swipeLeft();
  };

  const onPressLike = () => {
    if (!isPopoverOpen) {
      return showPopover();
    }

    return stepUtilitiesRef.current?.goToNextStepperScreen(isPopoverOpen);
  };

  return {
    isFemale,
    activeLikeBtn,
    isPopoverOpen,
    popoverTriggerRef,
    stepUtilitiesRef,
    showPopover,
    onPressLike,
    closePopover,
    onPressDislike,
    setActiveLikeBtn,
  };
};

export default useDateWizard;
