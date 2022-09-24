import React from 'react';
import { Switch } from 'react-native';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import Box from '@/components/common/Box';
import Text from '@/components/common/Text';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { useTheme } from '@/theme';

interface IToggleProps<T extends FieldValues> extends Omit<ControllerProps<T>, 'render'> {
  title: string;
  onToggleSwitch: (arg: boolean) => void;
}

const FormToggle = <T extends FieldValues>({
  title,
  defaultValue,
  onToggleSwitch,
  ...controllerProps
}: IToggleProps<T>) => {
  const { colors } = useTheme();
  const [isToggled, setIsToggled] = React.useState<boolean>(defaultValue ?? true);

  useUpdateEffect(() => {
    onToggleSwitch(isToggled);
  }, [isToggled]);

  return (
    <Controller
      {...controllerProps}
      render={() => {
        return (
          <Box height="auto" alignItems="center" justifyContent="center">
            <Switch
              value={isToggled}
              thumbColor={colors.white}
              trackColor={{ false: colors.white_30, true: colors.darkSkyBlue }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsToggled((prev) => !prev)}
            />
            <Text margin="md" variant="font14Regular" style={{ flex: title.length > 40 ? 1 : 0 }}>
              {title}
            </Text>
          </Box>
        );
      }}
    />
  );
};

export default FormToggle;
