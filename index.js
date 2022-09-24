import React from 'react';

import App from './App';
import { AppRegistry } from 'react-native';
import { AuthProvider } from '@/context/Auth.Context';

import { name as appName } from './app.json';
import { startNetworkLogging } from 'react-native-network-logger';

const Root = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
startNetworkLogging();
AppRegistry.registerComponent(appName, () => Root);
