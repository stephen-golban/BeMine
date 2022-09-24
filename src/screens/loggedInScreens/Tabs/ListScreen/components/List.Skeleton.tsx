import React from 'react';

import { LIST_UTILS } from './List.Utils';

import { Box, Skeleton } from '@/components/common';

const ListSkeleton = () => {
  return (
    <Box height="auto">
      {Array.from(Array(6)).map((_, i) => (
        <Box
          key={'skeleton-box' + i}
          margin="xs"
          overflow="hidden"
          flexDirection="column"
          justifyContent="flex-end"
          width={LIST_UTILS.ITEM_WIDTH}
          height={LIST_UTILS.ITEM_HEIGHT}
        >
          <Box position="absolute">
            <Skeleton backgroundColor="#ddd" />
          </Box>

          <Box width="100%" height="auto" justifyContent="center" marginBottom="lg">
            <Box width={120} height={15} borderRadius={0} overflow="hidden">
              <Skeleton backgroundColor="#ccc" />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ListSkeleton;
