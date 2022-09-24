import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Box from '../Box';
import Text from '../Text';
import { FormButton, Input } from './components';

import { IFormProps } from './Form.types';

const Form = <DefaultValues extends object>(props: IFormProps<DefaultValues>) => {
  const { children, onSubmit, defaultValues, canGoToNextStep, submitButtonTitle = 'continue' } = props;

  const methods = useForm<DefaultValues>({ defaultValues, mode: 'all' });

  return (
    <FormProvider {...methods}>
      <Box flexDirection="column" justifyContent="space-between">
        <Box width="auto" height="auto" flex={1}>
          {children}
        </Box>
        {Array.isArray(props.error) ? (
          props.error.map((err, index) => (
            <Text key={'register-error-' + err.split(' ')[0] + index} color="reddish">
              {err}
            </Text>
          ))
        ) : (
          <Text color="reddish">{props.error}</Text>
        )}
        <FormButton
          loading={props.loading}
          title={submitButtonTitle}
          disabled={!canGoToNextStep}
          onSubmit={methods.handleSubmit((data) => onSubmit(data, methods))}
        />
      </Box>
    </FormProvider>
  );
};

Form.Input = Input;

export default Form;
