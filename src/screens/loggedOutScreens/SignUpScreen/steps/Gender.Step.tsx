import React from 'react';

import { Controller } from 'react-hook-form';
import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Box, Text } from '@/components/common';
import { Radio, Toggle } from '@/components/common/Form/components';
import { StepWithChildren } from '@/components/common/Stepper/components';

import { Gender } from '@/graphql/generated';

const genders = [
  { name: Gender.Male, title: 'Male' },
  { name: Gender.Female, title: 'Female' },
  { name: Gender.Other, title: 'Other' },
];

const GenderStep: React.FC = () => {
  const { setValue, control } = useTypedFormContext();

  return (
    <Controller
      name="gender"
      control={control}
      rules={{
        required: 'A gender must be selected.',
      }}
      render={({ field: { value }, fieldState }) => {
        return (
          <StepWithChildren completed={fieldState.isDirty && !fieldState.error}>
            <Box flexDirection="column" justifyContent="space-between">
              <Box flexDirection="column" height="auto">
                <Text color="white" variant="font20Bold" marginVertical="md">
                  I am a:
                </Text>
                <Radio.Group
                  defaultSelected={value.gender}
                  onChangeValue={(val) =>
                    setValue('gender.gender', val as Gender, { shouldValidate: true, shouldDirty: true })
                  }
                >
                  {genders.map((gender) => {
                    return <Radio key={gender.name} name={gender.name} title={gender.title} />;
                  })}
                </Radio.Group>
              </Box>
              <Toggle
                defaultValue={value.genderPublic}
                control={control}
                name="gender.genderPublic"
                title="Show my sex in the profile"
                onToggleSwitch={(val) => setValue('gender.genderPublic', val)}
              />
            </Box>
          </StepWithChildren>
        );
      }}
    />
  );
};

export default GenderStep;
