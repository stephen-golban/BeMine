import React from 'react';
import { Animated } from 'react-native';

import { useTheme } from '@/theme';
import useStyles from './Scenario.styles';
import useScenario from './hooks/useScenario';

import Box from '../Box';
import Text from '../Text';
import Button from '../Button';

import { IScenario } from './Scenario.types';
import { FavoriteIconOutlined, SuccessIcon } from '@/components/icons';

const Scenario: React.FC<IScenario> = (props) => {
  const {
    title,
    focused,
    onPress,
    children,
    width = 30,
    height = 30,
    color = 'white',
    textColor = 'white',
    bg = 'white_12',
    Icon = FavoriteIconOutlined,
    error = { message: '', toggle: false },
  } = props;

  const { spacing, colors } = useTheme();
  const { shakeAnimation } = useScenario({ error });

  const styles = useStyles({
    translateX: shakeAnimation.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [10, 20, 10, 20, 10],
    }),
    focused: focused ?? false,
  });

  return (
    <Animated.View style={styles.wrapper}>
      <Button
        onPress={onPress}
        borderRadius={999}
        alignItems="center"
        width={spacing.xxl}
        height={spacing.xxl}
        position="relative"
        justifyContent="center"
        backgroundColor={focused ? 'tealish_20' : bg}
      >
        {focused && (
          <Box
            position="absolute"
            top={0}
            right={0}
            width={20}
            height={20}
            borderRadius={999}
            alignItems="center"
            justifyContent="center"
            backgroundColor="tealish"
          >
            <SuccessIcon width={10} height={10} color={colors.white} />
          </Box>
        )}
        <Icon width={width} height={height} color={color} />
      </Button>
      {title ? (
        <Text fontWeight="700" textAlign="center" fontSize={title.split(' ').length > 1 ? 12 : 13} color={textColor}>
          {title}
        </Text>
      ) : (
        children
      )}
    </Animated.View>
  );
};

export default Scenario;
