import React from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@/theme';

import { Box } from '@/components/common';
import { CardButton } from '@/components/ui';

import { RejectIcon, SuccessIcon } from '@/components/icons';

import { IDateWizardActionsProps } from './DateWizardActions.types';

const DateWizardActions: React.FC<IDateWizardActionsProps> = (props) => {
  const { colors } = useTheme();

  const { onPressLike, onPressDislike, activeLikeBtn, popoverTriggerRef } = props;

  return (
    <React.Fragment>
      <CardButton ref={popoverTriggerRef} variant="bottomLeft" backgroundColor="white" onPress={onPressDislike}>
        <RejectIcon width={24} height={24} color={colors.black_30} />
      </CardButton>
      <CardButton variant="bottomRight" backgroundColor="white" onPress={onPressLike} disabled={!activeLikeBtn}>
        <SuccessIcon width={24} height={24} />
        {!activeLikeBtn && (
          <Box
            style={StyleSheet.absoluteFill}
            opacity={0.6}
            borderRadius={100}
            position="absolute"
            backgroundColor="white"
          />
        )}
      </CardButton>
    </React.Fragment>
  );
};

export default DateWizardActions;
