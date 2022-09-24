import React from 'react';

import { Controller } from 'react-hook-form';
import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Box, Text } from '@/components/common';
import { Radio, Toggle } from '@/components/common/Form/components';
import { StepWithChildren } from '@/components/common/Stepper/components';

import { Orientation } from '@/graphql/generated';

const orientations = [
  { name: Orientation.Straight, title: 'Straight' },
  { name: Orientation.Gay, title: 'Gay' },
  { name: Orientation.Lesbian, title: 'Lesbian' },
  { name: Orientation.Bisexual, title: 'Bisexual' },
  { name: Orientation.Asexual, title: 'Asexual' },
];

const SexualOrientationStep: React.FC = () => {
  const { setValue, control } = useTypedFormContext();

  return (
    <Controller
      name="orientation"
      control={control}
      rules={{
        required: 'An orientation must be selected.',
      }}
      render={({ field: { value }, fieldState }) => {
        return (
          <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
            <Box flexDirection="column" justifyContent="space-between">
              <Box flexDirection="column" height="auto">
                <Text color="white" variant="font20Bold" marginVertical="md">
                  My Sexual Orientation:
                </Text>
                <Radio.Group
                  defaultSelected={value.orientation}
                  onChangeValue={(val) =>
                    setValue('orientation.orientation', val as Orientation, { shouldDirty: true, shouldValidate: true })
                  }
                >
                  {orientations.map((orientation) => {
                    return <Radio key={orientation.title} name={orientation.name} title={orientation.title} />;
                  })}
                </Radio.Group>
              </Box>
              <Toggle
                defaultValue={value.orientationPublic}
                control={control}
                name="orientation.orientationPublic"
                title="Show my orientation in the profile"
                onToggleSwitch={(val) => setValue('orientation.orientationPublic', val)}
              />
            </Box>
          </StepWithChildren>
        );
      }}
    />
  );
};

export default SexualOrientationStep;
