import React from 'react';

import EmailStep from './steps/Email.Step';
import { Form, Stepper } from '@/components/common';
import { PasswordStep, AuthLayout } from '../parts';

import useLoginUser from './hooks/useLoginUser';
import { useAuthData, useAuthStepper } from '../hooks';
import { useLoggedOutNavigation } from '@/navigation/hooks/useNavigation';
import { DEFAULT_SIGNIN_FORM_VALUES, SigninFormValues } from './SignInScreen.mock';

const SignUpScreen = () => {
  const { navigate } = useLoggedOutNavigation();

  const { loginUser, error, loading } = useLoginUser();
  const { handleGoBack, retrieveStepperData, stepperRef, canGoToNextStep } = useAuthStepper();
  const { DEFAULT_FORM_VALUES, authState, resetAuthState, setAuthState } = useAuthData(DEFAULT_SIGNIN_FORM_VALUES);

  const handleOnFinishSteps = async () => {
    return loginUser(authState).then(() => resetAuthState());
  };

  const onSubmit = (data: SigninFormValues) => {
    setAuthState(data);

    return stepperRef.current?.onNext();
  };

  return (
    <AuthLayout goBack={() => handleGoBack(() => navigate('WelcomeScreen'))}>
      <Form<SigninFormValues>
        error={error}
        loading={loading}
        onSubmit={onSubmit}
        canGoToNextStep={canGoToNextStep}
        defaultValues={authState || DEFAULT_FORM_VALUES}
      >
        <Stepper
          ref={stepperRef}
          resetStepperOnFinish={false}
          onFinish={handleOnFinishSteps}
          retrieveStepperData={retrieveStepperData}
        >
          <EmailStep />

          <PasswordStep />
        </Stepper>
      </Form>
    </AuthLayout>
  );
};

export default SignUpScreen;
