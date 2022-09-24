import React from 'react';

import { AuthStepperData, AuthStepperRef } from './types';

const useAuthStepper = () => {
  const stepperRef = React.useRef<AuthStepperRef>(null);
  const [stepperData, retrieveStepperData] = React.useState<AuthStepperData>({ activeIndex: 0, completedSteps: [] });

  const canGoToNextStep = stepperData.completedSteps.includes(stepperData.activeIndex);

  const handleGoBack = (cb: () => void) => {
    if (stepperData.activeIndex < 1) {
      return cb();
    }

    return stepperRef.current?.navigate.decrement();
  };

  return { handleGoBack, retrieveStepperData, stepperRef, stepperData, canGoToNextStep };
};

export default useAuthStepper;
