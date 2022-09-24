import React from 'react';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import RadioGroup from './components/Radio.Group';

interface IRadioProps {
  name: string;
  title: string;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
}

const Radio: React.FC<IRadioProps> = ({ name, title, onChange, defaultChecked = false }) => {
  const [isChecked, setIsChecked] = React.useState(defaultChecked);

  const handleOnChange = () => {
    onChange && onChange(name);
  };

  useUpdateEffect(() => {
    setIsChecked(defaultChecked);
  }, [defaultChecked]);

  return (
    <Button
      width="50%"
      margin="xs"
      padding="md"
      borderRadius={999}
      alignSelf="center"
      alignItems="center"
      justifyContent="center"
      onPress={handleOnChange}
      backgroundColor={isChecked ? 'white' : 'white_20'}
    >
      <Text variant="font16Bold" color={isChecked ? 'darkSkyBlue' : 'white'}>
        {title}
      </Text>
    </Button>
  );
};

const RadioNamespace = Object.assign(Radio, { Group: RadioGroup });
export default RadioNamespace;
