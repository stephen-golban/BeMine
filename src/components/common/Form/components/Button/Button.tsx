import React from 'react';

import { useTheme } from '@/theme';

import Text from '../../../Text';
import Button from '../../../Button';

import { IFormButtonProps } from './Button.types';
import { ActivityIndicator } from 'react-native';
import Box from '@/components/common/Box';

const FormButton: React.FC<IFormButtonProps> = ({ title, onSubmit, disabled, loading }) => {
  const { spacing, colors } = useTheme();

  return (
    <Button
      onPress={onSubmit}
      borderRadius={25}
      alignItems="center"
      alignSelf="center"
      width="65%"
      height={spacing.xl}
      justifyContent="center"
      backgroundColor="darkSkyBlue"
      disabled={disabled ?? loading}
      opacity={disabled ?? loading ? 0.5 : 1}
    >
      <Box height="auto" justifyContent="center" alignItems="center">
        {loading && <ActivityIndicator color={colors.white} size={25} style={{ marginRight: 10 }} />}
        <Text textTransform="uppercase" variant="font16Bold" opacity={50} color="white">
          {title}
        </Text>
      </Box>
    </Button>
  );
};

export default FormButton;
