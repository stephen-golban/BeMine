import React from 'react';
import 'cross-fetch/polyfill';

import { theme } from '@/theme';
import client from '@/ApolloClient';
import AppNavigation from '@/navigation/AppNavigation';

import { SplashScreen } from '@/screens';
import { useAuthStatus } from '@/context/hooks';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@shopify/restyle';
import { OverlayProvider } from '@react-native-aria/overlays';

const App = () => {
  const status = useAuthStatus();

  if (status === 'loading') {
    return (
      <ThemeProvider theme={theme}>
        <SplashScreen />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <OverlayProvider>
          <AppNavigation />
        </OverlayProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
