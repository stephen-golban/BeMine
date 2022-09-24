import React from 'react';

import { Form, Stepper } from '@/components/common';
import { AuthLayout, PasswordStep } from '../parts';
import {
  EmailStep,
  NameStep,
  GenderStep,
  PhotosStep,
  AgeRangeStep,
  BirthdayStep,
  InterestedInStep,
  SexualOrientationStep,
} from './steps';

import { useGeolocation } from '@/hooks';
import useCreateUser from './hooks/useCreateUser';
import { useAuthData, useAuthStepper } from '../hooks';
import { useLoggedOutNavigation } from '@/navigation/hooks/useNavigation';

import { DEFAULT_SIGNUP_FORM_VALUES, SignupFormValues } from './SignupScreen.mock';

const SignUpScreen = () => {
  const { location } = useGeolocation(true);
  const { navigate } = useLoggedOutNavigation();

  const { createUser, error, loading } = useCreateUser();
  const { handleGoBack, retrieveStepperData, stepperRef, canGoToNextStep } = useAuthStepper();
  const { authState, setAuthState, resetAuthState } = useAuthData(DEFAULT_SIGNUP_FORM_VALUES);

  const handleOnFinishSteps = async () => {
    if (location) {
      const {
        coords: { latitude: LAT, longitude: LONG },
      } = location;

      const latitude = String(LAT);
      const longitude = String(LONG);
      const newUser = { longitude, latitude, ...authState };

      return createUser(newUser).then(() => resetAuthState());
    }

    return;
  };

  const onSubmit = (data: SignupFormValues) => {
    setAuthState(data);

    return stepperRef.current?.onNext();
  };

  return (
    <AuthLayout goBack={() => handleGoBack(() => navigate('WelcomeScreen'))}>
      <Form
        error={error}
        loading={loading}
        onSubmit={onSubmit}
        canGoToNextStep={canGoToNextStep}
        defaultValues={authState || DEFAULT_SIGNUP_FORM_VALUES}
      >
        <Stepper
          ref={stepperRef}
          resetStepperOnFinish={false}
          onFinish={handleOnFinishSteps}
          retrieveStepperData={retrieveStepperData}
        >
          <EmailStep />

          <PasswordStep />

          <NameStep />

          <GenderStep />

          <SexualOrientationStep />

          <InterestedInStep />

          <BirthdayStep />

          <AgeRangeStep />

          <PhotosStep />
        </Stepper>
      </Form>
    </AuthLayout>
  );
};

export default SignUpScreen;
