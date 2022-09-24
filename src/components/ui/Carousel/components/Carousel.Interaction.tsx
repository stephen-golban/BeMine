import React from 'react';

import { useTheme } from '@/theme';

import { Box, Text } from '@/components/common';
import { HeartSimpleIcon } from '@/components/icons';

import { InteractionType } from '@/graphql/generated';
import useFadeAnimation from '../hooks/useFadeAnimation';
import { Animated } from 'react-native';

interface ICarouselInteractionProps {
  visible?: boolean;
  interactionType: InteractionType;
}

const CarouselInteraction: React.FC<ICarouselInteractionProps> = ({ visible, interactionType }) => {
  const { colors } = useTheme();
  const opacity = useFadeAnimation(visible);

  const isInvite = interactionType === InteractionType.InviteMe;

  if (interactionType === InteractionType.Suggestion) {
    return null;
  }

  const getInteractionText = () => {
    switch (interactionType) {
      case InteractionType.Like:
        return 'She likes you!';

      case InteractionType.InviteMe:
        return 'Ready to be invited';

      default:
        return 'Proposed a date';
    }
  };
  const AnimatedBox = Animated.createAnimatedComponent(Box);
  return (
    <AnimatedBox
      opacity={opacity}
      width="auto"
      height="auto"
      top={-70}
      borderRadius={20}
      position="absolute"
      alignItems="center"
      paddingVertical="md"
      paddingHorizontal="lg"
      justifyContent="center"
      backgroundColor="black_50"
    >
      <HeartSimpleIcon width={20} height={20} color={isInvite ? colors.darkSkyBlue : colors.carnationPink} />
      <Text color={isInvite ? 'darkSkyBlue' : 'carnationPink'} variant="font18Bold" marginLeft="xs">
        {' '}
        {getInteractionText()}
      </Text>
    </AnimatedBox>
  );
};

export default CarouselInteraction;
