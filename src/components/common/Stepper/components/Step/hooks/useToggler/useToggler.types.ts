import { StepDataType } from '@/components/common/Stepper/Stepper.types';

type useTogglerProps = {
  /**
   * @param data - The array of objects that you want to toggle.
   */
  data: StepDataType[];
  /**
   * @param isSingleToggle - Determines if a single option must be selected
   */
  isSingleToggle?: boolean;
};

export type { useTogglerProps };
