import React from 'react';

import useStepper from './hooks/useStepper';
import { StepperProvider } from './Context';

import { StepWithChildren, StepWithData } from './components';

import { StepperComponentProps } from './Stepper.types';

const Stepper = React.forwardRef(
  (
    {
      children,
      onFinish,
      renderFinishMessage,
      retrieveStepperData,
      resetStepperOnFinish = true,
    }: StepperComponentProps,
    ref,
  ) => {
    const stepsCount = React.Children.count(children);
    const { activeIndex, completedSteps, utilities, navigate } = useStepper(stepsCount);

    const [finished, setFinished] = React.useState(false);

    const handleFinish = () => {
      resetStepperOnFinish && utilities.reset();
      return onFinish();
    };

    const onNext = () => {
      if (completedSteps.length === stepsCount && activeIndex === completedSteps[completedSteps.length - 1]) {
        setFinished(true);
        return handleFinish();
      }

      if (completedSteps.includes(activeIndex)) {
        return navigate.increment();
      }
    };

    React.useImperativeHandle(ref, () => ({ onNext, navigate, utilities }));

    const renderChildren = () => {
      if (finished && renderFinishMessage) {
        return renderFinishMessage;
      }

      return React.Children.map(children, (element, index) => {
        if (React.isValidElement(element)) {
          if (index === activeIndex) {
            return element;
          }
        }
      });
    };

    React.useEffect(() => {
      if (retrieveStepperData) {
        retrieveStepperData({ activeIndex, completedSteps });
      }
    }, [activeIndex, retrieveStepperData, completedSteps]);

    return (
      <StepperProvider value={{ activeStepperIndex: activeIndex, utilities, completedSteps, navigate }}>
        {renderChildren()}
      </StepperProvider>
    );
  },
);

Stepper.displayName = 'Stepper';
const StepperNamespace = Object.assign(Stepper, { StepWithChildren, StepWithData });

export default StepperNamespace;
