import React from 'react';

import { StepperNavigateType, StepperProviderProps, StepperUtilitiesType } from './Stepper.types';

interface IContext {
  activeStepperIndex: number;
  completedSteps: number[];
  navigate: StepperNavigateType;
  utilities: StepperUtilitiesType;
}

const Context = React.createContext<IContext | Record<string, never>>({});

export const StepperProvider = ({ children, value }: StepperProviderProps) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useStepperContext = () => {
  const ctx = React.useContext(Context);

  if (!ctx) {
    throw new Error('useStepperContext should be used inside StepperProvider');
  }

  return ctx;
};
