import React from 'react';

import { Controller } from 'react-hook-form';
import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Box, Text } from '@/components/common';
import { Radio } from '@/components/common/Form/components';
import { StepWithChildren } from '@/components/common/Stepper/components';

import { SeekAge } from '@/graphql/generated';

const AGE_RANGES = [
  { name: SeekAge.EighteenToThirty, title: '18-30' },
  { name: SeekAge.ThirtyToFortyFive, title: '30-45' },
  { name: SeekAge.FromFortyFive, title: '45+' },
];

const AgeRangeStep: React.FC = () => {
  const { control, setValue } = useTypedFormContext();

  return (
    <Controller
      name="seekAge"
      control={control}
      rules={{
        required: 'An age range must be selected.',
      }}
      render={({ field: { value }, fieldState }) => {
        return (
          <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
            <Box flexDirection="column" height="auto">
              <Text color="white" variant="font20Bold" marginVertical="md">
                My prefered age range is:
              </Text>
              <Radio.Group
                defaultSelected={value}
                onChangeValue={(val) =>
                  setValue('seekAge', val as SeekAge, { shouldDirty: true, shouldValidate: true })
                }
              >
                {AGE_RANGES.map((range) => {
                  return <Radio key={range.name} name={range.name} title={range.title} />;
                })}
              </Radio.Group>
            </Box>
          </StepWithChildren>
        );
      }}
    />
  );
};

export default AgeRangeStep;
