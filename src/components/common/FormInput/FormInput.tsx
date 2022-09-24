import React from 'react';
import { TextInput } from 'react-native';

import { Box, Text } from '@/components/common';

import { Controller } from 'react-hook-form';

import useStyles from './FormInput.styles';
import { FormInputProps } from './FormInput.types';

const FormInput: React.FC<FormInputProps> = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  inputStyles,
  label,
}) => {
  const styles = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <React.Fragment>
          <Box height="auto" borderColor={error ? 'red' : 'matterhorn'} flexDirection="column">
            {label && (
              <Text color="white" variant="font20Bold" margin="md">
                {label}
              </Text>
            )}
            <TextInput
              autoFocus
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input, { ...inputStyles }]}
              secureTextEntry={secureTextEntry}
            />
          </Box>
          {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
        </React.Fragment>
      )}
    />
  );
};

export default FormInput;
