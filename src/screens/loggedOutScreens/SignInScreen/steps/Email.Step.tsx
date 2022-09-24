import React from 'react';

import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Input } from '@/components/common/Form/components';
import { StepWithChildren } from '@/components/common/Stepper/components';
import { SigninFormValues } from '../SignInScreen.mock';

const EmailStep = () => {
  const { control, getFieldState, formState } = useTypedFormContext<SigninFormValues>();
  const fieldState = getFieldState('email', formState);

  return (
    <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
      <Input
        name="email"
        control={control}
        label="My Email address:"
        placeholder="john.doe@email.com"
        keyboardType="email-address"
        rules={{
          required: 'Email is required!',
          pattern: {
            value:
              /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please provide a valid email address.',
          },
        }}
      />
    </StepWithChildren>
  );
};

export default EmailStep;
