import { IconProps } from '@/components/icons/types/Icon';
import { PropsWithChildren } from 'react';

export type StepDataType = {
  name: string;
  selected: boolean;
  icon: React.FC<IconProps<object>>;
};

type StepperData = {
  activeIndex: number;
  completedSteps: number[];
};

type StepperComponentProps = PropsWithChildren<{
  /**
   * @param onFinish - Callback function triggered when all the wizard steps are finished
   */
  onFinish: () => void;
  /**
   * @param renderFinishMessage - Callback function triggered to render a finishing element/message
   */
  renderFinishMessage?: JSX.Element;
  /**
   * @param resetStepperOnFinish - Determines if stepper step data should be reset after the last steo was reached and completed
   */
  resetStepperOnFinish?: boolean;
  retrieveStepperData?: (arg0: StepperData) => void;
}>;

export type StepperUtilitiesType = {
  reset: (resetStep?: number) => void;
  complete: (step?: number) => void;
  uncomplete: (step?: number) => void;
};

export type StepperNavigateType = {
  increment: () => void;
  decrement: () => void;
  goToStep: (nextStep: number) => void;
};

type StepperProviderProps = PropsWithChildren<{
  value: {
    activeStepperIndex: number;
    utilities: StepperUtilitiesType;
    navigate: StepperNavigateType;
    completedSteps: number[];
  };
}>;

export type { StepperComponentProps, StepperProviderProps };
