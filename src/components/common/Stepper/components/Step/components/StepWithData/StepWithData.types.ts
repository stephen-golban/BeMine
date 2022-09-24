import { ElementType } from 'react';
import { StepDataType } from '../../../../Stepper.types';

export interface IStepWithDataProps {
  /**
   * @param data - The data that will be used to render the items.
   */
  data: StepDataType[];
  /**
   * @param isSingleToggle - Determines if a single option must be selected
   */
  isSingleToggle?: boolean;
  /**
   * @param Item - The component that will be rendered for each item in the list.
   */
  Item: ElementType;
  /**
   * @param setSelected - This is a function that will be called whenever the selected items change.
   */
  setSelected: (arg: StepDataType[]) => void;
  /**
   * @param setIsValid - This is a function that will be called whenever the selected items change and it determines if the step is complete/incomplete
   */
  setIsValid?: (arg: boolean) => void;
}
