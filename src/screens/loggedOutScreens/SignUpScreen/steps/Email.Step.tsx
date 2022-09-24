import React from 'react';

import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Box } from '@/components/common';
import { Input, Toggle } from '@/components/common/Form/components';
import { StepWithChildren } from '@/components/common/Stepper/components';

const EmailStep: React.FC = () => {
  const { control, setValue, getFieldState, formState, getValues } = useTypedFormContext();
  const fieldValues = getValues('email');
  const fieldState = getFieldState('email', formState);

  return (
    <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
      <Box flexDirection="column" justifyContent="space-between">
        <Input
          name="email.email"
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
          inputHelperText="Verify your email address for being able to restore access to your account."
        />
        <Toggle
          defaultValue={fieldValues.receiveUpdatesByEmail}
          control={control}
          name="email.receiveUpdatesByEmail"
          title="I want to receive news and updates from BeMine to my email"
          onToggleSwitch={(val) => setValue('email.receiveUpdatesByEmail', val)}
        />
      </Box>
    </StepWithChildren>
  );
};

export default EmailStep;
