import React from 'react';

import useList from 'react-use/lib/useList';

const FIRST_STEP = 0;

type NumArray = number[];

const useStepper = (length: number) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(FIRST_STEP);
  const [steps] = React.useState<NumArray>(Array.from({ length }, (_, i) => i));
  const [completedSteps, { updateAt, reset: resetCompletedSteps }] = useList<number>([]);

  const inRange = React.useCallback(
    (index: number) => {
      if (index < FIRST_STEP) {
        return FIRST_STEP;
      }
      if (index >= steps.length) {
        return steps.length - 1;
      }
      return index;
    },
    [steps],
  );

  const go = React.useCallback((nextStep: number) => setActiveIndex(inRange(nextStep)), [inRange]);

  const increment = React.useCallback(() => go(activeIndex + 1), [go, activeIndex]);
  const decrement = React.useCallback(() => go(activeIndex - 1), [go, activeIndex]);
  const reset = (resetStep = FIRST_STEP) => {
    go(resetStep);
    return resetCompletedSteps();
  };

  const handleAction = React.useCallback(
    (isComplete = true) => {
      return (step = activeIndex) => {
        const checkStepIndex = inRange(step);

        const stepIndex = steps.indexOf(steps[checkStepIndex]);
        if (isComplete) {
          return updateAt(stepIndex, stepIndex);
        }
        return completedSteps.filter((_, i) => i !== stepIndex);
      };
    },
    [activeIndex, completedSteps, inRange, steps],
  );

  return {
    completedSteps,
    activeIndex,
    navigate: {
      increment,
      decrement,
      goToStep: go,
    },
    utilities: {
      reset,
      complete: handleAction(true),
      uncomplete: handleAction(false),
    },
  };
};

export default useStepper;
