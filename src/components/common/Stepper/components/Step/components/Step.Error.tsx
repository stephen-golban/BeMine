import React from 'react';
import { Dimensions } from 'react-native';

import Box from '@/components/common/Box';
import Text from '@/components/common/Text';

const StepError: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Box
      borderRadius={20}
      justifyContent="center"
      paddingVertical="xs"
      backgroundColor="white"
      position="absolute"
      top={-30}
      left={-10}
      borderBottomLeftRadius={0}
      borderBottomRightRadius={0}
      width={Dimensions.get('window').width - 20}
      height={35}
    >
      <Text variant="font16Bold" color="reddish">
        {message}
      </Text>
    </Box>
  );
};

export default StepError;
