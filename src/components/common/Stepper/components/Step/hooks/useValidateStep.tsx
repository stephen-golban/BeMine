import React from 'react';

import useCompleteStep from './useCompleteStep';
import useLifecycles from 'react-use/lib/useLifecycles';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

type useValidateStepType = { isValid: boolean; setIsValid?: (arg: boolean) => void };

const useValidateStep = ({ isValid, setIsValid }: useValidateStepType) => {
  const { completeStep } = useCompleteStep({ completed: false });

  const validateStep = React.useCallback((val: boolean) => setIsValid && setIsValid(val), [setIsValid]);

  useUpdateEffect(() => {
    if (isValid) {
      completeStep('complete');
    } else {
      completeStep('uncomplete');
    }

    validateStep(isValid);
  }, [isValid]);

  useLifecycles(
    // runs on *Mount*
    () => validateStep(false),

    // runs on *UnMount*
    () => validateStep(true),
  );

  return;
};

export default useValidateStep;
