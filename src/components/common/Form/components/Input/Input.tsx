import React from 'react';
import { TextInput } from 'react-native';

import useStyles from './Input.styles';
import { Controller } from 'react-hook-form';

import Box from '@/components/common/Box';
import Text from '@/components/common/Text';

import { InputProps } from './Input.types';
import { useTheme } from '@/theme';

const Input = <T extends object>(props: InputProps<T>) => {
  const { colors } = useTheme();
  const { name, label, rules, control, isPasswordInput, inputHelperText, ...inputProps } = props;

  const styles = useStyles();

  return (
    <Box height="auto" flexDirection="column">
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <React.Fragment>
            <Box height="auto" flexDirection="column">
              <Text color="white" variant="font20Bold" marginVertical="md">
                {label}
              </Text>

              <TextInput
                {...inputProps}
                value={value}
                onBlur={onBlur}
                style={styles.input}
                onChangeText={onChange}
                secureTextEntry={isPasswordInput}
                selectionColor={colors.white_30}
                placeholderTextColor={colors.white_30}
              />
            </Box>
            {error && (
              <Text color="reddish" marginLeft="xs" marginTop="xs">
                {error.message}
              </Text>
            )}

            {inputHelperText && (
              <Text margin="md" textAlign="center" variant="font14Regular">
                {inputHelperText}
              </Text>
            )}
          </React.Fragment>
        )}
      />
    </Box>
  );
};

export default Input;
