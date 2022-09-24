import React from 'react';

import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Input } from '@/components/common/Form/components';
import { StepWithChildren } from '@/components/common/Stepper/components';

const PasswordStep: React.FC = () => {
  const { control, getFieldState, formState } = useTypedFormContext();
  const fieldState = getFieldState('password', formState);

  return (
    <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
      <Input
        control={control}
        name="password"
        label="Create a strong password:"
        placeholder="*********"
        rules={{
          minLength: {
            value: 8,
            message: 'Your password should be at least 8 characters long.',
          },
          required: 'A password is required!',
        }}
        isPasswordInput
      />
    </StepWithChildren>
  );
};

export default PasswordStep;
