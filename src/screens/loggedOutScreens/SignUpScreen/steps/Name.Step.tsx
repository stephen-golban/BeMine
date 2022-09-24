import React from 'react';

import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Input } from '@/components/common/Form/components';
import { StepWithChildren } from '@/components/common/Stepper/components';

const NameStep: React.FC = () => {
  const { control, getFieldState, formState } = useTypedFormContext();
  const fieldState = getFieldState('name', formState);

  return (
    <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
      <Input
        control={control}
        name="name"
        label="My Name is:"
        placeholder="John"
        rules={{
          minLength: {
            value: 1,
            message: "Your name can't be shorter than 1 letter.",
          },
          maxLength: {
            value: 25,
            message: "Your name can't be longer than 25 charactes.",
          },
          pattern: {
            value: /^[a-zA-Z-]{1,}(?: [a-zA-Z-]+){0,2}$/,
            message: 'Invalid name structure',
          },
          required: 'A name is required!',
        }}
        inputHelperText="Your name will be displayed in the app and you could not change it later."
      />
    </StepWithChildren>
  );
};

export default NameStep;
