import React from 'react';
import { SafeAreaView, View } from 'react-native';

import useDateTimePicker, { PickerMode } from './hooks/useDateTimePicker';

import Box from '../Box';
import Text from '../Text';
import Button from '../Button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { format } from 'date-fns';
import styles from './DatePicker.styles';

interface IProps {
  getDate: (arg0: Date) => void;
  mode?: PickerMode;
}

const DatePicker: React.FC<IProps> = ({ getDate, mode }) => {
  const { pickerMode, date, showDatePicker, showTimePicker, handleConfirm, hidePicker } = useDateTimePicker();

  return (
    <SafeAreaView style={styles.container}>
      <Box alignItems="center" justifyContent="space-between" padding="xs">
        <View>
          <Text fontWeight="bold" color="black">
            Select Date
          </Text>
        </View>
        <Box width="auto" height="auto" flexDirection="row">
          <Button onPress={showDatePicker} style={styles.actions}>
            <Text color="black">{format(date, 'MMM dd, yyyy')}</Text>
          </Button>
          <Button onPress={showTimePicker} style={styles.actions}>
            <Text color="black">{format(date, 'hh:mm aaa')}</Text>
          </Button>
        </Box>
      </Box>
      <Box flex={1} justifyContent="center" alignItems="center">
        <DateTimePickerModal
          isVisible={pickerMode !== null}
          mode={mode ?? (pickerMode as PickerMode)}
          onConfirm={(_e) => handleConfirm(_e, getDate)}
          onCancel={hidePicker}
          minimumDate={new Date()}
        />
      </Box>
    </SafeAreaView>
  );
};

export default DatePicker;
