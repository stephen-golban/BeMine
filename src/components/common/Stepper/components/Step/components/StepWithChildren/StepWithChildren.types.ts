import { PropsWithChildren } from 'react';

export interface IStepWithChildrenProps extends PropsWithChildren {
  /**
   * @param completed - Determmines if the step is completed by default
   */
  completed: boolean;

  shouldUpdateCompleteStatus?: boolean;
}
