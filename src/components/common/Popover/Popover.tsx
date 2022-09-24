import React from 'react';

import { usePopover } from './hooks';

import { Backdrop, Content, Overlay } from './components';

import { IPopoverProps } from './Popover.types';

const Popover = ({ children, isOpen, trigger, onClose }: IPopoverProps): JSX.Element | null => {
  if (!trigger) {
    console.warn("Popover: Invalid 'trigger' prop received, please pass a valid Ref!");
    return null;
  }

  return (
    <Overlay isOverlayOpen={isOpen} onRequestClose={onClose}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Content) {
            return React.cloneElement(child, {
              injectedProps: {
                targetRef: trigger,
              },
            });
          }
        }
      })}
    </Overlay>
  );
};

Popover.Content = Content;
Popover.Backdrop = Backdrop;
Popover.hooks = {
  usePopover,
};

export default Popover;
