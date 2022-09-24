import { MutableRefObject, ReactNode } from 'react';

export interface IPopoverProps {
  /**
   * @param children - The passed node children that accepts only the Popover.Content as its direct child
   */
  children: ReactNode;
  /**
   * @param isOpen - Controls the popover's visibility
   */
  isOpen: boolean;
  /**
   * @param onClose - Callback function called when the popover should close
   */
  onClose: () => void;
  /**
   * @param trigger - Element which will be used as a Trigger
   */
  trigger: MutableRefObject<JSX.Element | null>;
}
