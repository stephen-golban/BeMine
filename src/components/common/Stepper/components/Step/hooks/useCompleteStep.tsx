import React from 'react';

import useMount from 'react-use/lib/useMount';
import { useStepperContext } from '../../../Context';

import { StepperUtilitiesType } from '../../../Stepper.types';

const useCompleteStep = ({
  completed,
  shouldUpdateCompleteStatus,
}: {
  completed?: boolean;
  shouldUpdateCompleteStatus?: boolean;
}) => {
  const { activeStepperIndex, utilities } = useStepperContext();

  const completeStep = React.useCallback(
    (key: keyof StepperUtilitiesType) => {
      return utilities[key](activeStepperIndex);
    },
    [activeStepperIndex, utilities],
  );

  React.useEffect(() => {
    if (shouldUpdateCompleteStatus) {
      if (completed) {
        completeStep('complete');
      } else {
        completeStep('uncomplete');
      }
    }
  }, [completed, shouldUpdateCompleteStatus]);

  useMount(() => {
    if (!shouldUpdateCompleteStatus) {
      if (completed) {
        completeStep('complete');
      }
    }
  });

  return { completeStep };
};

export default useCompleteStep;
