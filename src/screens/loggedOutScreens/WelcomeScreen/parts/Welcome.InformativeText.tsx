import React from 'react';

import { Box, Text } from '@/components/common';

const WelcomeInformativeText = () => {
  return (
    <Box flexDirection="column" height="auto" width="85%">
      <Text textAlign="center" variant="font14Regular" color="white_50">
        By selecting{' '}
        <Text variant="font14Bold" color="white_50">
          Create Account
        </Text>{' '}
        or{' '}
        <Text variant="font14Bold" color="white_50">
          Sign In
        </Text>
        , you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy.
      </Text>
    </Box>
  );
};

export default WelcomeInformativeText;
