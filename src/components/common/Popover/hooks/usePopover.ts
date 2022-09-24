import React from 'react';

type usePopoverReturn = [
  boolean,
  {
    showPopover: () => void;
    hidePopover: () => void;
    popoverTriggerRef: React.MutableRefObject<null>;
  },
];

const usePopover = (): usePopoverReturn => {
  const popoverTriggerRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  return [
    isOpen,
    {
      showPopover: () => setIsOpen(true),
      hidePopover: () => setIsOpen(false),
      popoverTriggerRef,
    },
  ];
};

export default usePopover;
