import React from 'react';
import { useTheme } from '@/theme';
import { ArrowBackIcon } from '@/components/icons';
import { Box, Text, Button } from '@/components/common';

const InfoHeader = ({ handleGoBack }: { handleGoBack: () => void }) => {
  const { colors } = useTheme();

  return (
    <Box justifyContent="center" alignItems="center" flex={1}>
      <Box position="absolute" left={10}>
        <Button width={30} height={30} onPress={handleGoBack}>
          <ArrowBackIcon width={25} height={25} color={colors.black_30} />
        </Button>
      </Box>
      <Text variant="font16Bold" color="black">
        Possible Date Scenarios
      </Text>
    </Box>
  );
};

export default InfoHeader;
