import React from 'react';

import useValidateStep from '../useValidateStep';
import useUnmount from 'react-use/lib/useUnmount';
import useToggler from '../useToggler/useToggler';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { useStepProps } from './useStep.types';
import { StepDataType } from '@/components/common/Stepper/Stepper.types';

const useStep = ({ setIsValid, setSelected, data, isSingleToggle }: useStepProps) => {
  const { mutatedData, toggle, isValid, selectedItems, resetToggler } = useToggler({ data, isSingleToggle });

  const setSelectedSteps = React.useCallback((val: StepDataType[]) => setSelected && setSelected(val), [setSelected]);

  useUpdateEffect(() => {
    setSelectedSteps(selectedItems);
  }, [selectedItems]);

  useValidateStep({ isValid, setIsValid });

  useUnmount(() => resetToggler());

  return { toggleSelected: toggle, DATA: mutatedData, selectedCount: selectedItems.length };
};

export default useStep;
