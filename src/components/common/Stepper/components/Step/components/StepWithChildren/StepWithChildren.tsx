import React from 'react';
// import { useUpdateEffect } from 'react-use';

import useCompleteStep from '../../hooks/useCompleteStep';

import { IStepWithChildrenProps } from './StepWithChildren.types';

const StepWithChildren: React.FC<IStepWithChildrenProps> = ({
  children,
  completed,
  shouldUpdateCompleteStatus = true,
}) => {
  useCompleteStep({ completed, shouldUpdateCompleteStatus });

  return <React.Fragment>{children}</React.Fragment>;
};

export default StepWithChildren;
