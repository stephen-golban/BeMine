import React from 'react';
import { Dimensions } from 'react-native';

import moment from 'moment';
import { Controller } from 'react-hook-form';
import { useTypedFormContext } from '@/components/common/Form/hooks';

import { Box, Text } from '@/components/common';
import DatePicker from 'react-native-date-picker';
import { StepWithChildren } from '@/components/common/Stepper/components';

const WIDTH = Dimensions.get('window').width;

const BirthdayStep: React.FC = () => {
  const { control } = useTypedFormContext();

  const calculateAge = (date: Date) => {
    return moment().diff(date, 'years', true);
  };

  return (
    <Controller
      name="birthDate"
      control={control}
      rules={{
        required: 'A birth date must be selected.',
        validate: (val) => calculateAge(val) > 18 || 'You must be 18 years or older.',
      }}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <StepWithChildren completed={calculateAge(value) > 18}>
            <Box flexDirection="column" height="auto">
              <Text color="white" variant="font20Bold" marginVertical="md">
                My birthday is on:
              </Text>
              {error && (
                <Text color="reddish" marginLeft="xs">
                  {error.message}
                </Text>
              )}
              <DatePicker
                mode="date"
                textColor="white"
                fadeToColor="none"
                maximumDate={new Date()}
                minimumDate={moment().subtract(100, 'years').toDate()}
                style={{ width: WIDTH - 40, backgroundColor: 'transparent' }}
                date={value}
                onDateChange={onChange}
              />
            </Box>
          </StepWithChildren>
        );
      }}
    />
  );
};

export default BirthdayStep;
