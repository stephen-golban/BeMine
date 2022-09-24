import { StepperNavigateType, StepperUtilitiesType } from '@/components/common/Stepper/Stepper.types';

export type AuthStepperRef = {
  onNext: () => void;
  navigate: StepperNavigateType;
  utilities: StepperUtilitiesType;
};

export type AuthStepperData = {
  activeIndex: number;
  completedSteps: number[];
};
