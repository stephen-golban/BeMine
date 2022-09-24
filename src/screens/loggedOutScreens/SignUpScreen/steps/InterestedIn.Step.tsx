import React from 'react';

import { Controller } from 'react-hook-form';
import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Box, Text } from '@/components/common';
import { Radio } from '@/components/common/Form/components';
import { StepWithChildren } from '@/components/common/Stepper/components';

import { Gender } from '@/graphql/generated';

const options = [
  { name: Gender.Female, title: 'Women' },
  { name: Gender.Male, title: 'Men' },
  { name: Gender.Other, title: 'All' },
];

const InterestedInStep: React.FC = () => {
  const { control, setValue } = useTypedFormContext();

  return (
    <Controller
      name="seekGender"
      control={control}
      rules={{
        required: 'An option must be selected.',
      }}
      render={({ field: { value }, fieldState }) => {
        return (
          <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
            <Box flexDirection="column" height="auto">
              <Text color="white" variant="font20Bold" marginVertical="md">
                Show me:
              </Text>
              <Radio.Group
                defaultSelected={value}
                onChangeValue={(val) =>
                  setValue('seekGender', val as Gender, { shouldDirty: true, shouldValidate: true })
                }
              >
                {options.map((option) => {
                  return <Radio key={option.title} name={option.name} title={option.title} />;
                })}
              </Radio.Group>
            </Box>
          </StepWithChildren>
        );
      }}
    />
  );
};

export default InterestedInStep;
