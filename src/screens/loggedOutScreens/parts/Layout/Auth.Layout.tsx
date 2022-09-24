import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import { useTheme } from '@/theme';

import { Box, Button } from '@/components/common';
import { ArrowBackIcon } from '@/components/icons';

interface IFormStepProps extends React.PropsWithChildren {
  goBack?: () => void;
}

const AuthLayout: React.FC<IFormStepProps> = ({ children, goBack }) => {
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box flexDirection="column" padding="md" paddingBottom="lg" backgroundColor="black">
          <Box flexDirection="column" paddingBottom="lg">
            <Button width={30} height={30} left={-8} onPress={goBack}>
              <ArrowBackIcon width={30} height={30} color={colors.white} />
            </Button>
            {children}
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AuthLayout;
