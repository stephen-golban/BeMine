export interface IPopoverBackdropProps {
  /**
   * @param onTouchBackdrop - Callback function called when a tap was registered on the Pressable component
   */
  onTouchBackdrop: () => void;
  /**
   * @param isBackdropOpen - Handles the mounting and visibility of the Backdrop
   */
  isBackdropOpen: boolean;
}
