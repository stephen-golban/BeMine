import React from 'react';

import { useAuthContext } from '../Auth.Context';

import * as Keychain from 'react-native-keychain';

export type AuthStatus = 'loading' | 'error' | 'success' | 'logged-out';

const useAuthStatus = () => {
  const { utilities } = useAuthContext();
  const [status, setStatus] = React.useState<AuthStatus>('logged-out');

  const retrieveTokens = React.useCallback(async () => {
    try {
      setStatus('loading');

      const value = await Keychain.getGenericPassword();

      const jwt = value && JSON.parse(value.password);

      if (jwt) {
        utilities.setState({
          accessToken: jwt.accessToken,
          refreshToken: jwt.refreshToken,
          isAuthenticated: true,
        });
        return setStatus('success');
      }
      return setStatus('logged-out');
    } catch (error) {
      console.log(`Keychain Error: ${error}`);
      setStatus('error');
      return utilities.resetState();
    }
  }, []);

  React.useEffect(() => {
    retrieveTokens();
  }, [retrieveTokens]);

  return status;
};

export default useAuthStatus;
