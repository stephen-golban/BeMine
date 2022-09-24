import { PropsWithChildren } from 'react';
export interface IOverlayProps extends PropsWithChildren {
  /**
   * @param isOverlayOpen - Toggles the visibility of the Overlay, creating the Popover fade-(in/out) animations
   */
  isOverlayOpen: boolean;
  /**
   * @param onRequestClose - Callback function triggered when the Smartphone back/exit button is tapped/gestured
   */
  onRequestClose: () => void;
}
