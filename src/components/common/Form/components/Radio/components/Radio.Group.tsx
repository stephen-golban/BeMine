import React from 'react';

import Box from '@/components/common/Box';
import { useUpdateEffect } from 'react-use';

interface IRadioGroupProps extends React.PropsWithChildren {
  onChangeValue: (arg: string) => void;
  defaultSelected?: string;
}

const RadioGroup: React.FC<IRadioGroupProps> = ({ children, onChangeValue, defaultSelected }) => {
  const [selectedValue, setSelectedValue] = React.useState<string>(defaultSelected ?? '');

  useUpdateEffect(() => {
    onChangeValue(selectedValue);
  }, [selectedValue]);

  return (
    <Box flexDirection="column" height="auto">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onChange: setSelectedValue,
            defaultChecked: child.props.name === selectedValue,
          });
        }
      })}
    </Box>
  );
};

export default RadioGroup;
