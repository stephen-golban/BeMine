import { useAuthContext } from '@/context/Auth.Context';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Settings = () => {
  const {
    utilities: { logout },
  } = useAuthContext();
  return (
    <View>
      <Button title="Logout" onPress={logout} />
      <Text>Settings Screen</Text>
    </View>
  );
};

export default Settings;
