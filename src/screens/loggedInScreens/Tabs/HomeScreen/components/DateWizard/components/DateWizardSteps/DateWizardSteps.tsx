import React from 'react';

import useDateWizardSteps from './hooks/useDateWizardSteps';

import NotificationStep from './components/NotificationStep';
import { Box, Scenario, Stepper } from '@/components/common';

import { IDateWizardStepsProps } from './DateWizardSteps.types';
import { MAIN_SCENARIOS, selectScenario } from '@/screens/loggedInScreens/InfoScreen/data';

const DateWizardSteps = React.forwardRef((props: IDateWizardStepsProps, ref) => {
  const { swipeCard, closePopover, setActiveLikeBtn } = props;

  const { setStepperState, stepperRef, stepsState, ...stepUtilities } = useDateWizardSteps(swipeCard);

  const furtherStepData = selectScenario(stepsState.scenario[0]?.name)?.further;
  const lastStepData = selectScenario(stepsState.scenario[0]?.name)?.last;

  React.useImperativeHandle(ref, () => ({
    resetStepperState: stepUtilities.resetStepperState,
    goToNextStepperScreen: stepUtilities.goToNextStepperScreen,
  }));

  return (
    <Box backgroundColor="black_50" width="auto" height="auto" borderRadius={22} paddingHorizontal="sm">
      <Stepper
        ref={stepperRef}
        renderFinishMessage={<NotificationStep />}
        onFinish={() => {
          return stepUtilities.handleFinishStepperScreens(closePopover);
        }}
      >
        <Stepper.StepWithData
          isSingleToggle
          Item={Scenario}
          data={MAIN_SCENARIOS}
          setIsValid={setActiveLikeBtn}
          setSelected={(items) => setStepperState('scenario', items)}
        />
        <Stepper.StepWithData
          Item={Scenario}
          data={furtherStepData}
          setIsValid={setActiveLikeBtn}
          setSelected={(items) => setStepperState('further', items)}
        />
        <Stepper.StepWithData
          Item={Scenario}
          data={lastStepData}
          setIsValid={setActiveLikeBtn}
          setSelected={(items) => setStepperState('last', items)}
        />
      </Stepper>
    </Box>
  );
});

DateWizardSteps.displayName = 'DateWizardSteps';

export default DateWizardSteps;
