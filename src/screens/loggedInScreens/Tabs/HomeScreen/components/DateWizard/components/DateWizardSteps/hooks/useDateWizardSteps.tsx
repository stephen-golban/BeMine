import React from 'react';

import useMap from 'react-use/lib/useMap';

import { SwiperRefType } from '@/interfaces/swiper';
import { StepDataType } from '@/components/common/Stepper/Stepper.types';
import { Suggestion } from '@/screens/loggedInScreens/Tabs/HomeScreen/hooks/useDateSuggestions';

const INITIAL_STEPPER_STATE = {
  scenario: [] as StepDataType[],
  further: [] as StepDataType[],
  last: [] as StepDataType[],
};

const useDateWizardSteps = (swipeCard: SwiperRefType<Suggestion>) => {
  const stepperRef = React.useRef<{ onNext: () => void }>(null);
  const [stepsState, { set: setStepperState, reset: resetStepperState }] = useMap(INITIAL_STEPPER_STATE);

  const goToNextStepperScreen = (isPopoverOpen: boolean) => {
    if (isPopoverOpen) {
      return stepperRef.current?.onNext();
    }
    return swipeCard.current?.swipeRight();
  };

  const handleFinishStepperScreens = (closePopover: () => void) => {
    setTimeout(() => closePopover(), 500);
    setTimeout(() => swipeCard.current?.swipeRight(), 1000);
  };

  return {
    stepsState,
    stepperRef,
    setStepperState,
    resetStepperState,
    goToNextStepperScreen,
    handleFinishStepperScreens,
  };
};

export default useDateWizardSteps;
