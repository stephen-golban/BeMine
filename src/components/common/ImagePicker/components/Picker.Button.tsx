import constants from '@/theme/utilities/constants';
import React from 'react';

import Button from '../../Button';
import Text from '../../Text';

interface IPickerButtonProps extends React.PropsWithChildren {
  title?: string;
  onPress?: () => void;
  topRadius?: boolean;
  bottomRadius?: boolean;
  bg?: keyof typeof constants.COLORS;
}

const PickerButton: React.FC<IPickerButtonProps> = (props) => {
  const { children, title, topRadius = true, bottomRadius = false, bg = 'white_82', onPress } = props;
  return (
    <Button
      height={50}
      onPress={onPress}
      alignItems="center"
      backgroundColor={bg}
      borderBottomWidth={1}
      justifyContent="center"
      borderBottomColor="greyishBrown_two"
      borderTopLeftRadius={topRadius ? 5 : 0}
      borderTopRightRadius={topRadius ? 5 : 0}
      borderBottomLeftRadius={bottomRadius ? 5 : 0}
      borderBottomRightRadius={bottomRadius ? 5 : 0}
    >
      {title ? (
        <Text color="warmGrey_two" fontSize={13} fontWeight="800">
          {title}
        </Text>
      ) : (
        children
      )}
    </Button>
  );
};

export default PickerButton;
