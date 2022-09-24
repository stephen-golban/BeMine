import { PropsWithChildren, RefObject } from 'react';

export interface IPopoverContentProps extends PropsWithChildren {
  /**
   * @param  marginHorizontal - Distance from both (left/right) screen sides and the PopoverContent itself
   * @default 20
   */
  marginHorizontal?: number;

  /**
   * @param injectedProps - This prop is not required to be passed
   */
  injectedProps?: {
    targetRef: unknown | RefObject<JSX.Element | null>;
  };
}
