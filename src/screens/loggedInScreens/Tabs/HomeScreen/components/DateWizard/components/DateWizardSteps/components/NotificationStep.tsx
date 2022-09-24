import React from 'react';

import { useTheme } from '@/theme';

import { Box, Text } from '@/components/common';
import { FavoriteIconFilled } from '@/components/icons';

const NotificationStep = () => {
  const { colors } = useTheme();

  return (
    <Box
      height="auto"
      width="auto"
      alignItems="center"
      justifyContent="center"
      style={{ paddingVertical: 25, paddingHorizontal: 20 }}
    >
      <FavoriteIconFilled width={25} height={25} color={colors.darkSkyBlue} />
      <Text color="darkSkyBlue" variant="font18Bold">
        {' '}
        Date Proposal Sent!
      </Text>
    </Box>
  );
};

export default NotificationStep;
