import React from 'react';

export type PickerMode = 'date' | 'time' | 'datetime' | undefined;

const useDateTimePicker = () => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [pickerMode, setPickerMode] = React.useState<PickerMode | null>(null);

  const showDatePicker = () => {
    setPickerMode('date');
  };

  const showTimePicker = () => {
    setPickerMode('time');
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = (date: Date, getDate: (arg0: Date) => void) => {
    hidePicker();
    setDate(date);
    getDate(date);
  };

  return {
    date,
    hidePicker,
    pickerMode,
    showDatePicker,
    showTimePicker,
    handleConfirm,
  };
};

export default useDateTimePicker;
