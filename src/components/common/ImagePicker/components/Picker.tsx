import React from 'react';
import { Modal } from 'react-native';

import Text from '../../Text';
import Button from '../../Button';
import PickerButton from './Picker.Button';

interface IPickerProps extends React.PropsWithChildren {
  closePicker: () => void;
  isPickerVisible: boolean;
}

const Picker: React.FC<IPickerProps> = ({ children, closePicker, isPickerVisible }) => {
  return (
    <Modal visible={isPickerVisible} animationType="fade" transparent onRequestClose={closePicker}>
      <Button flex={1} padding="xs" justifyContent="flex-end" backgroundColor="black_50" onPress={closePicker}>
        <PickerButton title="Choose an Action" />
        {children}
        <Button p="sm" marginVertical="sm" borderRadius={5} backgroundColor="white" onPress={closePicker}>
          <Text color="darkSkyBlue" variant="font18Bold" textAlign="center">
            Cancel
          </Text>
        </Button>
      </Button>
    </Modal>
  );
};

export default Picker;
