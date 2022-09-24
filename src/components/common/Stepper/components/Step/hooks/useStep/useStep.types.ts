import { StepDataType } from '@/components/common/Stepper/Stepper.types';

type useStepProps = {
  completed?: boolean;
  data: StepDataType[];
  isSingleToggle?: boolean;
  setIsValid?: (arg: boolean) => void;
  setSelected: (arg: StepDataType[]) => void;
};

export type { useStepProps };
